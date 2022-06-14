import React from "react";
import constants from "../constants";
import Cookies from 'js-cookie';
const HOST = constants.HOST;
export const DataContext = React.createContext();
const DataProvider = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [formData, setFormData] = React.useState({
        "name": "",
        "email": "",
        "age": "",
        "phone": "",
        "businessName": "",
        "GSTNo": "",
        "street": "",
        "city": "",
        "state": "",
        "zip": "",
        "amountINR": 100000,
        "tenureYrs": 10,
        "interestRate": 10
    });
    const readAllForms = async () => {
        try {
            const response = await fetch(`${HOST}/forms`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Auth-Token': Cookies.get('token')
                }
            });
            const data = await response.json();
            setData(data);
            setError(null);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    const submitForm = async () => {
        try {
            await fetch(`${HOST}/forms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            setFormData({
                "name": "",
                "email": "",
                "age": "",
                "phone": "",
                "businessName": "",
                "GSTNo": "",
                "street": "",
                "city": "",
                "state": "",
                "zip": "",
                "amountINR": 100000,
                "tenureYrs": 10,
                "interestRate": 10
            })
        } catch (error) {
        }
    }
    React.useEffect(() => {
        readAllForms();
    }, []);
    return (
        <DataContext.Provider value={{ data, error, loading, readAllForms, submitForm, formData, setFormData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

