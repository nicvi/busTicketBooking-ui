import * as React from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    IconButton,
    Drawer as MuiDrawer,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../../assets/img/logo.svg";
import {Avatar} from "../../atoms/";
import {SearchBar} from "../../molecules";
import {Drawer} from "../Drawer";
import {headerStyle} from "./HeaderStyles";
import {HeaderProps} from "./Types";

const drawerWidth = 240;
const appName = "ioet Client";

export const Header = ({
                           userPhoto,
                           userInformation,
                           navItems,
                           subheader = "",
                           window,
                       }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={headerStyle.drawerContainer}>
        <CssBaseline />
        <AppBar component="nav" sx={headerStyle.nav}>
    <Toolbar>
        <IconButton
            color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    sx={headerStyle.drawerIcon}
        >
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={headerStyle.headerLogo}>
    <img src={"nothing"} alt="client logo" />
        <span> {appName} </span>
        </Typography>
        <Box sx={headerStyle.headerSubContainer}>
    <SearchBar
        handleOnClick={() => {}}
    placeholder="Search lead, clients, and more"
    />

    <Box sx={headerStyle.headerInformation}>
    <Divider
        variant="middle"
    flexItem
    orientation="vertical"
    sx={headerStyle.headerDivider}
    />
    <Avatar
    alt="User photo"
    src={userPhoto}
    height="45px"
    width="45px"
    />
    <Typography
        variant="h6"
    component="div"
    sx={headerStyle.headerUserInformation}
    >
    {userInformation}
    </Typography>
    </Box>
    </Box>
    </Toolbar>
    </AppBar>
    <nav>
    <MuiDrawer
        container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
        keepMounted: true,
    }}
    sx={{
        display: {xs: "block", sm: "none"},
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
                width: drawerWidth,
        },
    }}
>
    <Drawer
        userPhoto={userPhoto}
    userInformation={userInformation}
    navItems={navItems}
    handleDrawerToggle={handleDrawerToggle}
    subheader={subheader}
    />
    </MuiDrawer>
    </nav>
    </Box>
);
};
