import React from "react";
import { Typography, Button, Container } from '@mui/material';
import TextField from '../components/TextField';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../providers/authProvider";
import Cookies from 'js-cookie';
const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = React.useContext(AuthContext);
    const [err, setErr] = React.useState(null);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        if (formData.username.length > 0 && formData.password.length > 0) {
            setButtonDisabled(true);
            try {
                await login(formData);
                navigate("/admin");
                setErr(null);
            } catch {
                setErr("Invalid username or password");
            }
            setButtonDisabled(false);
        } else {
            setErr("Please fill all the fields");
        }
    }
    React.useEffect(() => {
        if (Cookies.get("token")) {
            navigate("/admin");
        }
    })
    return (
        <Container sx={{
            marginLeft: "60px",
        }}>
            {!Cookies.get("token") &&
                <>
                    <Typography
                        variant="h4"
                        sx={{
                            marginTop: "80px",
                            marginBottom: "20px",
                        }}
                    >LoginPage</Typography>
                    <TextField
                        label="Username"
                        name="username"
                        error={formData.username.length <= 0 && err !== null}
                        helperText={formData.username.length === 0 && err !== null ? "Please enter username" : ""}
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        error={formData.password.length <= 0 && err !== null}
                        helperText={formData.password.length === 0 && err !== null ? "Please enter password" : ""}
                        required
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {err && formData.username.length > 0 && formData.password.length > 0 && <Typography variant="body2" color="error">{err}</Typography>}
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        disabled={buttonDisabled}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '60%',
                            }
                        }}>Login</Button>
                </>
            }
        </Container>
    )
}
export default LoginPage;