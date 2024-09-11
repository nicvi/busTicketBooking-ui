import { Typography } from '@mui/material';
import React from "react";

export const Price: React.FC<{ price: string }> = ({ price }) => (
    <Typography variant="h6" color="primary">
        {price}
    </Typography>
);
