import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { IButtonProps } from './Types';
import '@testing-library/jest-dom'; // for extended matchers like toBeInTheDocument

describe('Button component', () => {
    const defaultProps: IButtonProps = {
        text: 'Click Me',
        onClick: jest.fn(),
    };

    test('renders button with default props', () => {
        render(<Button {...defaultProps} />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Click Me');
    });

    test('calls onClick handler when clicked', () => {
        render(<Button {...defaultProps} />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    test('disables button when disabled prop is true', () => {
        render(<Button {...defaultProps} disabled />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    });

    test('applies sx styles and typographySx styles', () => {
        const sx = { backgroundColor: 'red' };
        const typographySx = { fontSize: '20px' };

        render(<Button {...defaultProps} sx={sx} typographySx={typographySx} />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: red');

        const textElement = screen.getByText('Click Me');
        expect(textElement).toHaveStyle('font-size: 20px');
    });
});