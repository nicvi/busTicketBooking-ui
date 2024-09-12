import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { IconProps } from './Types';
import WifiIcon from '@mui/icons-material/Wifi';
import MovieIcon from '@mui/icons-material/Movie';
import UsbIcon from '@mui/icons-material/Usb';

// Arrange: Setup for the test
const renderIconComponent = (props: Partial<IconProps> = {}) => {
    const defaultProps: IconProps = {
        iconType: 'wifi',
    };
    return render(<Icon {...defaultProps} {...props} />);
};

describe('Icon Component', () => {
    it('renders WifiIcon when iconType is wifi', () => {
        renderIconComponent({ iconType: 'wifi' });

        const wifiIconElement = screen.getByTestId('WifiIcon'); // Assuming MUI icons have test ids

        expect(wifiIconElement).toBeInTheDocument();
    });

    it('renders MovieIcon when iconType is movie', () => {
        renderIconComponent({ iconType: 'movie' });

        const movieIconElement = screen.getByTestId('MovieIcon');

        expect(movieIconElement).toBeInTheDocument();
    });

    it('renders UsbIcon when iconType is usb', () => {
        renderIconComponent({ iconType: 'usb' });

        const usbIconElement = screen.getByTestId('UsbIcon');

        expect(usbIconElement).toBeInTheDocument();
    });

    it('displays tooltip with correct iconType', () => {
        renderIconComponent({ iconType: 'wifi' });

        const tooltipElement = screen.getByLabelText('wifi'); // Tooltip title is the iconType

        expect(tooltipElement).toBeInTheDocument();
    });
});
