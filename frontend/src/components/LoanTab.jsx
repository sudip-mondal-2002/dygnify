import React from "react";
import TextField from "./TextField";
import { DataContext } from "../providers/dataProvider";
import { Button } from "@mui/material";
import { isText, isPhone, isEmail, isAge } from "../utils/validators";
const LoanTab = ({onSubmit}) => {
    const { formData, setFormData, submitForm } = React.useContext(DataContext);
    const [valid, setValid] = React.useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    React.useEffect(() => {
        let validity = true;
        if (!isText(formData.amountINR)
            || !isText(formData.tenureYrs)
            || !isText(formData.interestRate)){
            validity = false;
            console.log(1)
        }
        if (!isText(formData.name) 
        || !isEmail(formData.email) 
        || !isPhone(formData.phone) 
        || !isAge(formData.age)) {
            validity = false;
            console.log(2)
        }
        if (!isText(formData.businessName)
            || !isText(formData.GSTNo)
            || !isText(formData.street)
            || !isText(formData.city)
            || !isText(formData.state)
            || !isText(formData.zip)) {
            validity = false;
            console.log(3)
        }
        setValid(validity);
    },[formData]);
    return (
        <form onChange={handleChange}>
            <TextField
                label="Loan Amount (INR)"
                name="amountINR"
                type="number"
                required
                value={formData.amountINR}
            />
            <TextField
                label="Loan Tenure (Years)"
                name="tenureYrs"
                type="number"
                required
                value={formData.tenureYrs}
            />
            <TextField
                label="Interest Rate (%)"
                name="interestRate"
                type="number"
                required
                value={formData.interestRate}
            />
            
            <Button sx={{
                width: {
                    xs: '100%',
                    md: '60%',
                    lg: '60%'
                },
                margin: '10px auto'
            }}
                disabled={!valid}
                onClick={async ()=>{
                    try{
                        setValid(false)
                        await submitForm()
                        setValid(true)
                        onSubmit()
                    } catch (e) {
                    }
                }}
                variant="contained"
            >
                Submit
            </Button>
        </form >
    )
}
export default LoanTab;