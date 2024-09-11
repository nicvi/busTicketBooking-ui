import { Box, Tooltip } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import MovieIcon from '@mui/icons-material/Movie';
import UsbIcon from '@mui/icons-material/Usb';
import React from "react";

export const Icon: React.FC<{ iconType: string }> = ({ iconType }) => {
    const renderIcon = () => {
        switch (iconType) {
            case 'wifi':
                return <WifiIcon />;
            case 'movie':
                return <MovieIcon />;
            case 'usb':
                return <UsbIcon />;
            default:
                return null;
        }
    };

    return (
        <Tooltip title={iconType}>
            <Box>{renderIcon()}</Box>
        </Tooltip>
    );
};
