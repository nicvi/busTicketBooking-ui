import {INestedItems} from "../../../models";

export interface DrawerProps {
    userPhoto?: string;
    userInformation?: string;
    navItems: INestedItems[];
    handleDrawerToggle?: () => void;
    subheader?: string;
}
