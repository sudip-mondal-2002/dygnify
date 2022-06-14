import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersonalTab from "../components/PersonalTab";
import BusinessTab from './../components/BusinessTab';
import LoanTab from './../components/LoanTab';
const FormPage = () => {
    const [value, setValue] = React.useState("0");
    const [unlocked, setUnlocked] = React.useState("0")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', typography: 'body1', margin: "80px" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Personal" value="0" />
                        <Tab label="Business" value="1" disabled={unlocked < "1"} />
                        <Tab label="Loan" value="2" disabled={unlocked < "2"} />
                    </TabList>
                </Box>
                <TabPanel value="0">
                    <PersonalTab nextPage={() => {
                        setUnlocked(unlocked > "1" ? unlocked : "1")
                        setValue("1")
                    }} />
                </TabPanel>
                <TabPanel value="1">
                    <BusinessTab nextPage={() => {
                        setUnlocked(unlocked > "2" ? unlocked : "2")
                        setValue("2")
                    }} />
                </TabPanel>
                <TabPanel value="2">
                    <LoanTab onSubmit={()=>{
                        setUnlocked("0")
                        setValue("0")
                    }}/>
                </TabPanel>
            </TabContext>
        </Box>

    );
}
export default FormPage;