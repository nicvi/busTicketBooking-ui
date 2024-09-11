import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface DropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (e:any) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {

    const styles = {
        formControl: {
            margin: 0,
            fullWidth: true,
            backgroundColor: "#9ee",
            display: "flex",
            wrap: "nowrap"
        }
    };

    const mstyles = {
        minWidth: 340,
        maxWidth: '100%',
    }

    return (
        <FormControl
            fullWidth
            size="medium"
            style={mstyles}
        >
            <InputLabel
                size="normal"
                // sx={{minWidth: 'calc(100%)', }}
            >
                {label}
            </InputLabel>
            <Select value={value} onChange={onChange} label={label} variant={"outlined"}>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
