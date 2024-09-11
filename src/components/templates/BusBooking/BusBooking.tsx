import { Box } from '@mui/material';
import {BusCardList} from "../../organisms";
import React from "react";

const busData = [
    {
        departureTime: '10:00 AM',
        travelTime: '2h 30m',
        arrivalTime: '12:30 PM',
        origin: 'New York',
        destination: 'Philadelphia',
        isDirect: true,
        amenities: ['wifi', 'movie', 'usb'],
        busStatus: 'Almost Full',
        price: '$25',
    },
    {
        departureTime: '10:00 AM',
        travelTime: '2h 30m',
        arrivalTime: '12:30 PM',
        origin: 'New York',
        destination: 'Philadelphia',
        isDirect: true,
        amenities: ['wifi', 'movie', 'usb'],
        busStatus: 'Almost Full',
        price: '$25',
    },
    {
        departureTime: '10:00 AM',
        travelTime: '2h 30m',
        arrivalTime: '12:30 PM',
        origin: 'New York',
        destination: 'Philadelphia',
        isDirect: true,
        amenities: ['wifi', 'movie', 'usb'],
        busStatus: 'Almost Full',
        price: '$25',
    },
    {
        departureTime: '10:00 AM',
        travelTime: '2h 30m',
        arrivalTime: '12:30 PM',
        origin: 'New York',
        destination: 'Philadelphia',
        isDirect: true,
        amenities: ['wifi', 'movie', 'usb'],
        busStatus: 'Almost Full',
        price: '$25',
    },
];

export const BusBooking: React.FC = () => {
    const handleBookClick = (busIndex: number) => {
        console.log(`Booking bus index: ${busIndex}`);
    };

    return (
        <Box padding={4}>
            <BusCardList busCards={busData} onBookClick={handleBookClick} />
        </Box>
    );
};
