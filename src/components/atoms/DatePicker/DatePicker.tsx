import React from 'react';
import { TextField } from '@mui/material';
import {DatePickerProps} from "./Types";


export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
    return (
        <TextField
            type="date"
            label={"Departure date"}
            value={value}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
        />
    );
};
