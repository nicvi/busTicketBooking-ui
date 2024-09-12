import {Typography as MuiTypography} from "@mui/material";

import typographyStyle from "./TypographyStyle";
import {ITypographyProps} from "./Types";

export const Typography = ({
                               text,
                               size,
                               padding,
                               variant,
                               paragraph = false,
                               gutterBottom = false,
                               align = "left",
                               color = "black",
                               fontWeight,
                               textDecoration = "none",
                               optionalStyles = {},
                           }: ITypographyProps) => {
    const textColor = typographyStyle[color];
    return (
        <MuiTypography
            fontSize={size}
            padding={padding}
            variant={variant}
            paragraph={paragraph}
            gutterBottom={gutterBottom}
            align={align}
            fontWeight={fontWeight}
            sx={{textDecoration: textDecoration, color: textColor, ...optionalStyles}}
        >
            {text}
        </MuiTypography>
    );
};
