import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Typography, Container, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider'
import Cookies from 'js-cookie'
const MenuAppBar = () => {
    const { logout } = React.useContext(AuthContext);
    const navigator = useNavigate()
    return (
        <AppBar position="fixed" color="primary">
            <Container maxWidth="xl" sx={{
                height: "60px",
                display: "flex",
                alignItems: "center"
            }}>
                <Typography variant="h6" color="inherit" sx={{
                    marginLeft: "10px",
                    marginRight: "40px"
                }}>
                    Dygnify
                </Typography>
                <Button color="inherit" onClick={() => {
                    navigator("/admin")
                }}>
                    Admin
                </Button>
                <Button color="inherit" onClick={() => {
                    navigator("/")
                }}>
                    User
                </Button>
                {
                    Cookies.get("token") && <Button color="inherit" sx={{
                        marginLeft: "auto",
                        marginRight: "10px"
                    }}onClick={() => {
                        logout()
                        navigator("/login")
                    }}>Logout</Button>
                }
            </Container>
        </AppBar >
    )
}


export default MenuAppBar