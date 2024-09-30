export interface SnackbarProps {
    message: string;
    open: boolean;
    onClose: () => void;
    severity?: 'success' | 'info' | 'warning' | 'error';
    duration?: number;
}
