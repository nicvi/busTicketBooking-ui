import { Box, Typography } from '@mui/material';
import React from "react";
import {TimeInfoAtomProps} from "./TimeInfoType";


export const TimeInfo: React.FC<TimeInfoAtomProps> = ({ departure, travelTime, arrival }) => (
    <Box display="flex" alignItems="center">
        <Typography>{departure}</Typography>
        <Box mx={1}><Typography>|</Typography></Box>
        <Typography>{travelTime}</Typography>
        <Box mx={1}><Typography>|</Typography></Box>
        <Typography>{arrival}</Typography>
    </Box>
);
