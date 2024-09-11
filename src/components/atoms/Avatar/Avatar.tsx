import {Avatar as MuiAvatar} from "@mui/material";
import {avatarStyles} from "./AvatarStyles";
import {IAvatarProps} from "./Types";

export const Avatar = ({
                           alt,
                           src,
                           height = "auto",
                           width = "auto",
                       }: IAvatarProps) => {
    return (
        <MuiAvatar
            alt={alt}
            src={src}
            sx={{
                ...avatarStyles,
                height: height,
                width: width,
            }}
        >
            {!src && alt.charAt(0)}
        </MuiAvatar>
    );
};
