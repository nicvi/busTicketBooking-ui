import React from 'react';
import { Snackbar as MUISnackbar, Alert } from '@mui/material';
import {SnackbarProps} from "./Types";


export const Snackbar: React.FC<SnackbarProps> = (
    {
        message,
        open,
        onClose,
        severity = 'info',
        duration = 6000,
    }) => {

    return (
        <MUISnackbar
            open={open}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </MUISnackbar>
    );
};
