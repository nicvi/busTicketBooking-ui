import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectorForm } from './SelectorForm';
import { CityContext } from '../../../context';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('SelectorForm', () => {
    const citiesMock = ['New York', 'Los Angeles', 'Chicago'];
    const fetchCitiesMock = jest.fn();
    const navigateMock = jest.fn();


    const renderComponent = () => {
        return render(
            <CityContext.Provider value={
                {
                    cities: citiesMock,
                    fetchCities: fetchCitiesMock,
                    loading: false,
                    error: ''
                }
            }>
                <MemoryRouter>
                    <SelectorForm/>
                </MemoryRouter>
            </CityContext.Provider>
        );
    };

    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                setItem: jest.fn(),
                getItem: jest.fn(() => null),
                removeItem: jest.fn(),
                clear: jest.fn(),
            },
            writable: true,
        });
    });

    beforeEach(() => {
        fetchCitiesMock.mockClear();
        jest.clearAllMocks();
        (require('react-router-dom').useNavigate as jest.Mock).mockImplementation(() => navigateMock);
    });

    it('should render the form elements correctly', () => {
        renderComponent();

        expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/departure date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of tickets/i)).toBeInTheDocument(); // Updated label check
        expect(screen.getByText(/continue/i)).toBeInTheDocument();
    });

    it('should fetch cities on component mount', () => {
        renderComponent();
        expect(fetchCitiesMock).toHaveBeenCalledTimes(1);
    });

    it('should not navigate if form is incomplete', () => {
        render(<SelectorForm />);
        const continueButton = screen.getByRole('button', { name: /continue/i });

        fireEvent.click(continueButton);

        expect(navigateMock).not.toHaveBeenCalledWith("/time-selection");
        expect(screen.getByText(/Please complete booking information/i)).toBeInTheDocument();
    });

    it('should navigate to the time-selection page on valid form submission', () => {
        renderComponent();
        const expectedTicketBooking = {
            departureDate: '2024-09-28',
            seats: 2,
            origin: 'New York',
            destination: 'Los Angeles',
        };

        fireEvent.mouseDown(screen.getByLabelText(/origin/i));
        fireEvent.click(screen.getByText(citiesMock[0]));
        fireEvent.mouseDown(screen.getByLabelText(/destination/i));
        fireEvent.click(screen.getAllByText(citiesMock[1])[1]);
        fireEvent.mouseDown(screen.getByLabelText(/Number of Tickets/i));
        fireEvent.click(screen.getByText("2"));
        fireEvent.change(screen.getByLabelText(/departure date/i), { target: { value: '2024-09-28' } });
        fireEvent.click(screen.getByText(/continue/i));

        expect(localStorage.setItem).toHaveBeenCalledWith('ticketBooking', JSON.stringify(expectedTicketBooking));
        expect(navigateMock).toHaveBeenCalledWith('/time-selection', { state: expectedTicketBooking });
    });
});
