import React, {useState} from "react";
import {
    IconButton,
    InputAdornment,
    SxProps,
    TextField,
    Theme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchBarPropTypes from "./Types";
import {searchBarStyle} from "./SearchBarStyle";

export const SearchBar = ({
                              handleOnClick,
                              placeholder,
                              styles = searchBarStyle,
                          }: SearchBarPropTypes) => {
    const [isDisabled, setIsDisabled] = useState(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value;
        const alphaNumericCharactersRegExp = /^[a-zA-Z0-9\s]*$/;

        if (
            !alphaNumericCharactersRegExp.test(inputText) ||
            inputText.length === 0
        ) {
            setIsDisabled(true);
        } else setIsDisabled(false);
    };

    return (
        <TextField
            size="small"
            onChange={handleOnChange}
            sx={styles}
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            disabled={isDisabled}
                            sx={styles.iconButton as SxProps<Theme>}
                            onClick={handleOnClick}
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
