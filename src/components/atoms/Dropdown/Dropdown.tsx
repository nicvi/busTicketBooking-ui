import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import {DropdownProps} from "./Types";
import {formControlStyles} from "./DropdownStyle";

export const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
    const idLabel = `${label.replace(/\s+/g, '-')}-label`;
    return (
        <FormControl
            fullWidth
            size="medium"
            style={formControlStyles}
        >
            <InputLabel
                size="normal"
                id={idLabel}
            >
                {label}
            </InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={label}
                variant={"outlined"}
                labelId={idLabel}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
