import { render, screen } from '@testing-library/react';
import { Price } from './Price';

const renderPriceComponent = (price: string) => {
    return render(<Price price={price} />);
};

describe('Price Component', () => {
    it('renders the price text correctly', () => {
        const mockPrice = '$100.00';
        renderPriceComponent(mockPrice);

        const priceElement = screen.getByText(mockPrice);

        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveClass('MuiTypography-root');
        expect(priceElement).toHaveClass('MuiTypography-h6');
        expect(priceElement).toHaveStyle('color: #1976d2');
    });
});
