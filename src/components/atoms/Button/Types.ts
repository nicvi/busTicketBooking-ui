export interface IButtonProps {
    text?: string;
    variant?: "text" | "outlined" | "contained";
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning";
    size?: "small" | "medium" | "large";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    disableElevation?: boolean;
    onClick?: () => void;
    sx?: object;
    typographySx?: object;
    extraVariables?: object;
}
