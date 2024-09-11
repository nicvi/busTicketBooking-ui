import {INestedItems} from "../../../models/NestedItems.model";

export interface HeaderProps {
    window?: () => Window;
    userPhoto: string;
    userInformation: string;
    navItems: INestedItems[];
    subheader?: string;
}
