import {Theme} from "@mui/system";

const typographyStyle = {
    error: (theme: Theme) => theme.palette.error.main,
    primary: (theme: Theme) => theme.palette.primary.main,
    secondary: (theme: Theme) => theme.palette.secondary.main,
    textPrimary: (theme: Theme) => theme.palette.text.secondary,
    textSecondary: (theme: Theme) => theme.palette.grey[600],
    black: (theme: Theme) => theme.palette.common.black,
    white: (theme: Theme) => theme.palette.common.white,
};

export default typographyStyle;
