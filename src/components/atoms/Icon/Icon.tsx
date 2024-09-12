import { Box, Tooltip } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import MovieIcon from '@mui/icons-material/Movie';
import UsbIcon from '@mui/icons-material/Usb';
import React from "react";
import {IconProps} from "./Types";


export const Icon: React.FC<IconProps> = ({ iconType }) => {
    const renderIcon = () => {
        switch (iconType) {
            case 'wifi':
                return <WifiIcon data-testid="wifi"/>;
            case 'movie':
                return <MovieIcon data-testid="movie"/>;
            case 'usb':
                return <UsbIcon data-testid="usb"/>;
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
