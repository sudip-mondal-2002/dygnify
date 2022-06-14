import React from 'react';
import constants from "../constants";
import Cookies from 'js-cookie';
const HOST = constants.HOST;
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const login = async (user) => {
        try{
            const userResponse = await fetch(`${HOST}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const userData = await userResponse.json();
            const token = userData.token;
            Cookies.set('token', token);
            setUser(userData.user);
        } catch{
            setUser(null);
        }
    }
    const logout = async () => {
        Cookies.set('token', '');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;