import { Box } from '@mui/material';
import React from "react";
import {TimeInfoAtomProps} from "./TimeInfoType";
import {Typography} from "../Typography";


export const TimeInfo: React.FC<TimeInfoAtomProps> = ({ departure, travelTime, arrival }) => (
    <Box display="flex" alignItems="center">
        <Typography text={departure} variant={'body2'}/>
        <Box mx={1}><Typography text={'|'} variant={'body2'}/></Box>
            <Typography text={travelTime} variant={'body2'}/>
        <Box mx={1}><Typography text={'|'} variant={'body2'}/></Box>
            <Typography text={arrival} variant={'body2'}/>
    </Box>
);
