export type TypographyVariant =
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline";

export type TypographyColor =
    | "black"
    | "white"
    | "error"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary";

interface ITypographyProps {
    text: string | number;
    size?: string | number;
    padding?: string;
    variant: TypographyVariant;
    paragraph?: boolean;
    gutterBottom?: boolean;
    align?: "inherit" | "left" | "right" | "center" | "justify";
    color?: TypographyColor;
    textDecoration?: "none" | "underline" | "overline" | "line-through";
    fontWeight?: number;
    optionalStyles?: React.CSSProperties;
}

export default ITypographyProps;
