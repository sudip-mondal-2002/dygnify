import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const RequestCard = ({ request }) => {
    console.log(request)
    return (
        <Paper sx={{
            marginTop: "30px",
            padding: "20px 80px",
            width: {
                xs: '100%',
                md: '70%'
            }
        }}
        >
            <Typography variant="body2">
                Request ID: {request._id}
            </Typography>
            <Typography variant="body2">
                Date Requested: {new Date(request.createdAt).toDateString()}
            </Typography>
            <Stack spacing={1} direction={{
                xs: "column",
                sm: "row"
            }}
                flexDirection={{
                    xs: "column",
                    sm: "row"
                }}
                justifyContent='space-between'
            >
                <Stack>
                    <Typography variant="h6">Personal Details</Typography>
                    <Typography variant="body2">
                        Name: {request.personal.name}
                    </Typography>
                    <Typography variant="body2">
                        Email: {request.personal.email}
                    </Typography>
                    <Typography variant="body2">
                        Phone: {request.personal.phone}
                    </Typography>
                    <Typography variant="body2">
                        Age: {request.personal.age}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6">Business Details</Typography>
                    <Typography variant="body2">
                        Business Name: {request.business.name}
                    </Typography>
                    <Typography variant="body2">
                        GST Number: {request.business.GSTNo}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6">Loan Details</Typography>
                    <Typography variant="body2">
                        Loan Amount: INR {request.loan.amountINR}
                    </Typography>
                    <Typography variant="body2">
                        Loan Tenure: {request.loan.tenure} Years
                    </Typography>
                    <Typography variant="body2">
                        Loan Interest Rate: {request.loan.interestRate}%
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body2">
                        Street: {request.business.address.street}
                    </Typography>
                    <Typography variant="body2">
                        City: {request.business.address.city}
                    </Typography>
                    <Typography variant="body2">
                        State: {request.business.address.state}
                    </Typography>
                    <Typography variant="body2">
                        PIN Code: {request.business.address.zip}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
export default RequestCard;