import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DatePicker } from './DatePicker';

describe('DatePicker Component', () => {
    it('renders DatePicker with the correct label', () => {
        render(<DatePicker value="2024-09-12" onChange={() => {}} />);

        const labelElement = screen.getByLabelText(/departure date/i);

        expect(labelElement).toBeInTheDocument();
    });

    it('calls onChange handler when the date is changed', () => {
        const handleChange = jest.fn();
        render(<DatePicker value="2024-09-12" onChange={handleChange} />);

        const inputElement = screen.getByLabelText(/departure date/i);
        fireEvent.change(inputElement, { target: { value: '2024-09-13' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it('displays the correct initial value', () => {
        render(<DatePicker value="2024-09-12" onChange={() => {}} />);

        const inputElement = screen.getByLabelText(/departure date/i) as HTMLInputElement;

        expect(inputElement.value).toBe('2024-09-12');
    });
});
