import React from 'react';
import {Dropdown} from "../../atoms";

interface TicketSelectorProps {
    seats: string;
    onTicketChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

const TicketSelector: React.FC<TicketSelectorProps> = ({ seats, onTicketChange }) => {
    const ticketOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

    return (
        <div
            style={{display: 'flex', gap: '6px'}}
        >
            <Dropdown
                label="Number of Tickets"
                options={ticketOptions}
                value={seats}
                onChange={onTicketChange}
            />
        </div>
    );
};

export default TicketSelector;
