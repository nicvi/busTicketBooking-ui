import React from "react";

export interface INestedItems {
    id?: string;
    name: string;
    projects: string[];
    open: boolean;
    logo?: string | React.ReactNode;
}
