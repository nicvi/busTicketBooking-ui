import { render, screen } from '@testing-library/react';
import { TimeInfo } from './TimeInfo';

describe('TimeInfo Component', () => {
    it('renders departure, travel time, and arrival times correctly', () => {
        const departure = '08:00 AM';
        const travelTime = '2h 30m';
        const arrival = '10:30 AM';

        render(<TimeInfo departure={departure} travelTime={travelTime} arrival={arrival} />);

        expect(screen.getByText(departure)).toBeInTheDocument();
        expect(screen.getByText(travelTime)).toBeInTheDocument();
        expect(screen.getByText(arrival)).toBeInTheDocument();
        expect(screen.getAllByText('|').length).toBeGreaterThan(0);
    });
});
