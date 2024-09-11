import {Theme} from "@mui/material";

export const headerStyle = {
    drawerContainer: {
        textAlign: "center",
    },

    drawerListItems: {textAlign: "center"},
    headerContainer: {display: "flex"},
    drawerIcon: {mr: 2, display: {sm: "none"}},
    headerLogo: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        fontSize: {
            xs: "0.7rem",
            sm: "15px",
        },
        whiteSpace: "nowrap",
        "& img": {
            height: {xs: "25px", sm: "30px"},
            width: {xs: "25px", sm: "30px"},
        },
        "& > span": {
            paddingTop: {xs: "5px"},
            display: {xs: "block", sm: "block"},
        },
    },
    headerSubContainer: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 2,
        margin: "0 0 0 10px",
    },
    headerInformation: {
        display: {
            xs: "none",
            sm: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
        },
    },
    headerDivider: {
        borderWidth: "1px",
        borderColor: (theme: Theme) => theme.palette.common.white,
    },
    headerUserInformation: {
        alignSelf: "center",
    },
    nav: {
        background: "#30BCED",
    },
};
