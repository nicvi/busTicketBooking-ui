import React, {useContext, useEffect, useState} from 'react';
import {CitySelector} from "../../molecules";
import TicketSelector from "../../molecules/TicketSelector";
import {Button, DatePicker} from "../../atoms";
import { Box } from '@mui/material';
import {CityContext} from "../../../context";
import {useNavigate} from "react-router-dom";
import {ITicketBooking} from "../../../models";

export const SelectorForm: React.FC = () => {
    const navigate = useNavigate();
    const {cities, fetchCities} = useContext(CityContext);
    const [origin, setOrigin] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [departureDate, setDepartureDate] = useState<string>('');
    const [seats, setSeats] = useState<string>('1');

    useEffect(() => {
        fetchCities();
    }, [fetchCities]);


    const handleContinue = () => {
        if (origin !== ""  && destination !== "" && departureDate !== ""){
            const ticketBooking: ITicketBooking = {
                departureDate,
                seats: Number(seats),
                origin,
                destination
            }
            localStorage.setItem('ticketBooking', JSON.stringify(ticketBooking));
            navigate("/time-selection", { state: ticketBooking });
        }else {
            console.log("Please complete booking information");
        }
        console.log({ origin, destination, departureDate, seats });
    };

    return (
        <Box style={
            {
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '8px',
            display: 'flex',
            width: 'fit-content',
            gap: '16px',
            alignItems: 'center' }
        }>
            <CitySelector
                cities={cities}
                origin={origin}
                destination={destination}
                onOriginChange={(e) => setOrigin(e.target.value as string)}
                onDestinationChange={(e) => setDestination(e.target.value as string)}
            />
            <DatePicker value={departureDate} onChange={(date) => setDepartureDate(date.target.value)} />
            <TicketSelector
                seats={seats}
                onTicketChange={(e) => setSeats(e.target.value as string)}
            />
            <Button text="Continue" onClick={handleContinue} />
        </Box>
    );
};
