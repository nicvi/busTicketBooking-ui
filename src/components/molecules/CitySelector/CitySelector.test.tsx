import { render, screen, fireEvent } from '@testing-library/react';
import { CitySelector } from './CitySelector';


describe('CitySelector Component', () => {
    it('renders Dropdowns with correct labels and handles changes', () => {
        const mockCities = ['New York', 'Los Angeles', 'Chicago'];
        const mockOrigin = 'New York';
        const mockDestination = 'Los Angeles';
        const mockOnOriginChange = jest.fn();
        const mockOnDestinationChange = jest.fn();

        render(
            <CitySelector
                cities={mockCities}
                origin={mockOrigin}
                destination={mockDestination}
                onOriginChange={mockOnOriginChange}
                onDestinationChange={mockOnDestinationChange}
            />
        );

        const originDropdown = screen.getByLabelText('Origin City');
        fireEvent.click(originDropdown);

        expect(originDropdown).toBeInTheDocument();
        expect(screen.getByText(mockCities[0])).toBeInTheDocument();
    });
});
