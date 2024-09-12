import { Box } from '@mui/material';
import {BusCardList} from "../../organisms";
import React from "react";


export const BusBooking: React.FC<{ busData: any[] }> = ({busData}) => {
    const handleBookClick = (busIndex: number) => {
        console.log(`Booking bus index: ${busIndex}`);
    };

    return (
        <Box padding={4}>
            <BusCardList busCards={busData} onBookClick={handleBookClick} />
        </Box>
    );
};
