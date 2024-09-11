import React from "react";
import {Box, Divider, List, Typography} from "@mui/material";
import {Avatar} from "../../atoms";
import {drawerStyle} from "./DrawerStyles";
import {DrawerProps} from "./Types";
import {NestedList} from "../../molecules";

export const Drawer: React.FC<DrawerProps> = ({
                                                  userPhoto,
                                                  userInformation,
                                                  navItems,
                                                  handleDrawerToggle,
                                                  subheader = "",
                                              }) => {
    return (
        <Box
            onClick={handleDrawerToggle}
    sx={drawerStyle.drawerContainer}
    data-testid="drawer-box"
        >
        {userInformation && (
            <Box sx={drawerStyle.drawerHeader}>
                {userPhoto && (
                    <Avatar
                        alt="User photo"
    src={userPhoto}
    height="45px"
    width="45px"
        />
)}
    <Typography
        variant="h6"
    component="div"
    sx={drawerStyle.drawerHeaderTypography}
        >
        {userInformation}
        </Typography>
        </Box>
)}
    {userInformation && <Divider />}
    <List>
        <NestedList subheader={subheader} clients={navItems} />
    </List>
    </Box>
);
};
