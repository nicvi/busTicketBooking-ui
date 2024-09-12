import { render, screen, fireEvent } from '@testing-library/react';
import { BusCard } from './BusCard';


describe('BusCard Component', () => {
    it('renders bus information and interacts correctly', () => {
        // Arrange
        const departureTime = '08:00 AM';
        const travelTime = '2h 30m';
        const arrivalTime = '10:30 AM';
        const origin = 'City A';
        const destination = 'City B';
        const isDirect = true;
        const amenities = ['wifi', 'movie'];
        const busStatus = 'On Time';
        const price = '$50';
        const onBookClick = jest.fn();

        // Act
        render(
            <BusCard
                departureTime={departureTime}
                travelTime={travelTime}
                arrivalTime={arrivalTime}
                origin={origin}
                destination={destination}
                isDirect={isDirect}
                amenities={amenities}
                busStatus={busStatus}
                price={price}
                onBookClick={onBookClick}
            />
        );

        expect(screen.getByText(departureTime)).toBeInTheDocument();
        expect(screen.getByText(travelTime)).toBeInTheDocument();
        expect(screen.getByText(arrivalTime)).toBeInTheDocument();
        expect(screen.getByText(origin)).toBeInTheDocument();
        expect(screen.getByText(destination)).toBeInTheDocument();
        expect(screen.getByText(busStatus)).toBeInTheDocument();
        expect(screen.getByText(price)).toBeInTheDocument();

        amenities.forEach((amenity) => {
            expect(screen.getByTestId(`${amenity}`)).toBeInTheDocument();
        });

        const continueButton = screen.getByText('Continue');
        expect(continueButton).toBeInTheDocument();
        fireEvent.click(continueButton);
        expect(onBookClick).toHaveBeenCalledTimes(1);
    });
});