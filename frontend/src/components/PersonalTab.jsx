import React from "react";
import TextField from "./TextField";
import { DataContext } from "../providers/dataProvider";
import { Button } from "@mui/material";
import { isEmail, isText, isPhone, isAge } from "../utils/validators"
const PersonalTab = ({nextPage}) => {
    const { formData, setFormData } = React.useContext(DataContext);
    const [valid, setValid] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    React.useEffect(() => {
        let validity = true;
        if (!isText(formData.name) 
        || !isEmail(formData.email) 
        || !isPhone(formData.phone) 
        || !isAge(formData.age)) {
            validity = false;
        }
        setValid(validity);
    }, [formData]);
    return (
        <form onChange={handleChange}>
            <TextField
                label="Name"
                name="name"
                required
                value={formData.name}
            />
            <TextField
                label="Email"
                name="email"
                required
                error={formData?.email?.length>0 && !isEmail(formData?.email)}
                helperText={formData?.email?.length===0 || isEmail(formData?.email)?"":"Should contain valid email"}
                type="email"
                value={formData.email}
            />
            <TextField
                label="Phone"
                name="phone"
                error={formData?.phone?.length>0 && !isPhone(formData?.phone)}
                helperText={formData?.phone?.length===0 || isEmail(formData?.phone)?"":"Should contain valid phone no."}
                required
                type="tel"
                value={formData.phone}
            />
            <TextField
                label="Age"
                name="age"
                required
                type="number"
                value={formData.age}
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
                variant="contained"
                color="primary"
                onClick={nextPage}
            >
                Next
            </Button>
        </form >
    )
}
export default PersonalTab;