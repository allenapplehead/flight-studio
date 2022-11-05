import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

export default function DescriptionAlerts() {
    return (
        <Stack sx={{ width: '100%', alignItems: "center" }} spacing={2}>
            <Alert severity="error" sx={{width: "35%"}}>
            <AlertTitle>Error</AlertTitle>
            Hmm... it seems like you are missing key information — <strong>please supply departure and arrival location, and date and time!</strong>
            </Alert>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Stack>
    );
}