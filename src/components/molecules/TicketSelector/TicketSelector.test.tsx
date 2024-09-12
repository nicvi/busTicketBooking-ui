import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketSelector from './TicketSelector';

describe('TicketSelector Component', () => {
    const mockSeats = '1';
    const mockOnTicketChange = jest.fn();

    const renderTicketSelector = () =>
        render(
            <TicketSelector
                seats={mockSeats}
                onTicketChange={mockOnTicketChange}
            />
        );

    it('renders the TicketSelector with correct initial value and options', () => {
        renderTicketSelector();

        expect(screen.getByLabelText(/number of tickets/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue(mockSeats)).toBeInTheDocument();
    });
});
