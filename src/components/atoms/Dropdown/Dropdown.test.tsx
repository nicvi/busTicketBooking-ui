import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for additional matchers like toBeInTheDocument
import { Dropdown } from './Dropdown'; // Adjust the import to the correct path
import { DropdownProps } from './Types'; // Adjust the import to the correct path

describe('Dropdown Component', () => {
    const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
    const mockLabel = 'Select Option';

    const renderDropdown = (props: Partial<DropdownProps> = {}) => {
        const defaultProps: DropdownProps = {
            label: mockLabel,
            options: mockOptions,
            value: '',
            onChange: jest.fn(),
        };
        return render(<Dropdown {...defaultProps} {...props} />);
    };

    it('renders Dropdown with correct label', () => {
        renderDropdown();

        const labelElement = screen.getByLabelText(mockLabel);
        expect(labelElement).toBeInTheDocument();
    });

    it('renders all options passed to it', () => {
        renderDropdown();

        fireEvent.mouseDown(screen.getByLabelText(mockLabel));

        mockOptions.forEach(option => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it('calls onChange when an option is selected', () => {
        const handleChange = jest.fn();
        renderDropdown({ onChange: handleChange, value: mockOptions[0] });

        fireEvent.mouseDown(screen.getByLabelText(mockLabel));
        fireEvent.click(screen.getByText(mockOptions[1]));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('displays the correct value when passed', () => {
        renderDropdown({ value: mockOptions[1] });

        const selectElement = screen.getByDisplayValue(mockOptions[1]);

        expect(selectElement).toBeInTheDocument();
    });
});
