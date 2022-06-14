import React from "react";
import TextField from "./TextField";
import { DataContext } from "../providers/dataProvider";
import { Button } from "@mui/material";
import { isText } from "../utils/validators"
const BusinessTab = ({ nextPage }) => {
    const { formData, setFormData } = React.useContext(DataContext);
    const [valid, setValid] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    React.useEffect(() => {
        let validity = true;
        if (!isText(formData.businessName)
            || !isText(formData.GSTNo)
            || !isText(formData.street)
            || !isText(formData.city)
            || !isText(formData.state)
            || !isText(formData.zip)) {
            validity = false;
        }
        setValid(validity);
    }, [formData]);
    return (
        <form onChange={handleChange}>
            <TextField
                label="Business Name"
                name="businessName"
                required
                value={formData.businessName}
            />
            <TextField
                label="GST No."
                name="GSTNo"
                required
                value={formData.GSTNo}
            />
            <TextField
                label="Street"
                name="street"
                required
                value={formData.street}
            />
            <TextField
                label="City"
                name="city"
                required
                value={formData.city}
            />
            <TextField
                label="State"
                name="state"
                required
                value={formData.state}
            />
            <TextField
                label="PIN Code"
                name="zip"
                required
                value={formData.zip}
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
                onClick={nextPage}
                variant="contained"
            >
                Next
            </Button>
        </form >
    )
}
export default BusinessTab;