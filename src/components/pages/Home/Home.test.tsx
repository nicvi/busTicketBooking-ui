import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { CityContext } from '../../../context';

jest.mock('../../organisms/SelectorForm', () => ({
    SelectorForm: jest.fn(() => <div>Mocked SelectorForm</div>)
}));

describe('Home Component', () => {
    it('should render the header and SelectorForm correctly', () => {
        const citiesMock = ['City A', 'City B'];

        render(
            <CityContext.Provider value={
                {
                    cities: citiesMock,
                    fetchCities: jest.fn(),
                    loading:false,
                    error:""
                }
            }>
                <Home />
            </CityContext.Provider>
        );

        expect(screen.getByText('Travel Booking')).toBeInTheDocument();
    });
});
