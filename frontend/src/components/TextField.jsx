import React from "react";
import { TextField } from '@mui/material';

export default function customTextField(props) {
    return (
        <TextField
            sx={{
                width: {
                    xs: '100%',
                    md: '60%',
                    lg: '60%'
                },
                margin: '10px auto'
            }}
            variant="outlined"
            autoComplete="off"
            {...props}
        />
    )
}
