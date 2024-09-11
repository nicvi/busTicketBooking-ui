import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {BusBooking} from "../../templates/BusBooking";

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
            <BusBooking/>
        </div>
    );
};
