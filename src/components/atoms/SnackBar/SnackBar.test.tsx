import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Snackbar} from "./SnackBar";

describe('CustomSnackbar', () => {
    it('renders the Snackbar with the correct message and severity', () => {
        render(
            <Snackbar
                message="Test Success Message"
                open={true}
                onClose={() => {}}
                severity="success"
            />
        );

        const alertElement = screen.getByRole('alert');
        expect(screen.getByText('Test Success Message')).toBeInTheDocument();
        expect(alertElement).toHaveClass('MuiAlert-root');
        expect(alertElement).toHaveClass('MuiAlert-colorSuccess');
    });

    it('does not show the Snackbar when open is false', () => {
        render(
            <Snackbar
                message="Test Hidden Message"
                open={false}
                onClose={() => {}}
            />
        );

        expect(screen.queryByText('Test Hidden Message')).not.toBeInTheDocument();
    });

    it('calls onClose when the Alert is closed', () => {
        const handleClose = jest.fn();
        render(
            <Snackbar
                message="Test Close Message"
                open={true}
                onClose={handleClose}
                severity="warning"
            />
        );

        const alertCloseButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(alertCloseButton);

        expect(handleClose).toHaveBeenCalled();
    });
});