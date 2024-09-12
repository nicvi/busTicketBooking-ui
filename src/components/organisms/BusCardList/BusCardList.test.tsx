import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BusCardList } from './BusCardList'; // Adjust the import path as needed

jest.mock('../../molecules', () => ({
    BusCard: ({ onBookClick }:any) => <button onClick={onBookClick}>Book</button>,
}));

describe('BusCardList Component', () => {
    const mockBusCards = [
        { departureTime: '08:00', travelTime: '2h', arrivalTime: '10:00', origin: 'City A', destination: 'City B', isDirect: true, amenities: ['wifi'], busStatus: 'On Time', price: '$20' },
        { departureTime: '12:00', travelTime: '3h', arrivalTime: '15:00', origin: 'City C', destination: 'City D', isDirect: false, amenities: ['movie'], busStatus: 'Delayed', price: '$30' }
    ];

    const mockOnBookClick = jest.fn();

    const renderBusCardList = () =>
        render(
            <BusCardList
                busCards={mockBusCards}
                onBookClick={mockOnBookClick}
            />
        );

    it('renders the correct number of BusCard components', () => {
        renderBusCardList();

        expect(screen.getAllByText('Book')).toHaveLength(mockBusCards.length);
    });

    it('calls onBookClick with the correct index when a BusCard is clicked', () => {
        renderBusCardList();

        const buttons = screen.getAllByText('Book');

        fireEvent.click(buttons[0]);

        expect(mockOnBookClick).toHaveBeenCalledTimes(1);
        expect(mockOnBookClick).toHaveBeenCalledWith(0);
    });
});
