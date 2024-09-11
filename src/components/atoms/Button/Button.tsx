import React from "react";
import {Button as MuiButton, Typography} from "@mui/material";
import {IButtonProps} from "./Types";

export const Button: React.FC<IButtonProps> = ({
                                                   variant = "contained",
                                                   color = "primary",
                                                   size = "medium",
                                                   iconPosition,
                                                   icon,
                                                   disabled = false,
                                                   disableElevation = false,
                                                   text,
                                                   onClick,
                                                   sx,
                                                   typographySx,
                                                   ...extraVariables
                                               }) => {
    return (
        <MuiButton
            sx={sx}
            variant={variant ?? "contained"}
            color={color ?? "primary"}
            size={size ?? "medium"}
            startIcon={iconPosition === "left" ? icon : null}
            endIcon={iconPosition === "right" ? icon : null}
            disabled={disabled ?? false}
            disableElevation={disableElevation ?? false}
            onClick={onClick}
            {...extraVariables}
        >
            <Typography sx={typographySx} variant="button">
                {text}
            </Typography>
        </MuiButton>
    );
};
