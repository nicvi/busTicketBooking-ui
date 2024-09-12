import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {BusBooking} from "../../templates/BusBooking";

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

export const TimeSelection = () => {
    const location = useLocation();
    const [ticketBooking, setTicketBooking] = useState(() => {
        return location.state || JSON.parse(localStorage.getItem('ticketBooking') as string) || {};
    });

    useEffect(() => {
        if (!location.state) {
            const storedData = localStorage.getItem('tripData');
            if (storedData) {
                setTicketBooking(JSON.parse(storedData));
            }
        }
    }, [ticketBooking, location.state]);

    return (
        <div style={{margin: '50px'}}>
            <h1>Time selection</h1>
            <BusBooking busData={busData}/>
        </div>
    );
};
