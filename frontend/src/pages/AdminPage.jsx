import React from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../providers/dataProvider";
import Cookies from 'js-cookie';
import RequestCard from './../components/RequestCard';
import { Box } from '@mui/material';
const AdminPage = () => {
    const token = Cookies.get("token");
    const { data } = React.useContext(DataContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!Cookies.get("token")) {
            navigate("/login");
        }
    }, [token, navigate]);
    return (
        <>
            {
                Cookies.get('token') &&
                <Box sx={{
                    marginTop: "80px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    {
                        data && data.map((item, index) => {
                            return (
                                <RequestCard request={item} key={index} />
                            )
                        })
                    }
                </Box>
            }
        </>
    )
}
export default AdminPage;