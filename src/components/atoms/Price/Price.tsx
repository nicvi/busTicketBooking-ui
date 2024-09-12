import { Typography } from '@mui/material';
import React from "react";
import {PriceProps} from "./Types";

export const Price: React.FC<PriceProps> = ({ price }) => (
    <Typography variant="h6" color="primary">
        {price}
    </Typography>
);
