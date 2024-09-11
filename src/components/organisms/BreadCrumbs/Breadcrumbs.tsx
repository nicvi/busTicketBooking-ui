import React from "react";
import {Breadcrumbs as MuiBreadcrumbs, Link} from "@mui/material";
import {Typography} from "../../atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BreadcrumbsProps from "./Types";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({links}) => {
    const {pathname} = window.location;

    const getLinksByPathname = (
        pathname: string,
        extraLink?: {href: string; label: string}[],
    ) => {
        const links = [{href: "/", label: "Home"}];

        if (!extraLink) {
            pathname
                .split("/")
                .filter((link) => link)
                .forEach((link, index) => {
                    links.push({
                        href: `/${pathname
                            .split("/")
                            .filter((link) => link)
                            .slice(0, index + 1)
                            .join("/")}`,
                        label: link,
                    });
                });
        }

        if (extraLink !== undefined && Array.isArray(extraLink)) {
            extraLink.forEach((link) => links.push(link));
        }

        return links;
    };

    const breadcrumbs = getLinksByPathname(pathname, links);

    return (
        <MuiBreadcrumbs
            aria-label="breadcrumb"
            separator={<ArrowForwardIosIcon fontSize="small" />}
        >
            {breadcrumbs.map((breadcrumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return isLast ? (
                    <Typography
                        text={breadcrumb.label}
                        variant="h6"
                        size="18px"
                        key={breadcrumb.href}
                        textDecoration="underline"
                    />
                ) : (
                    <Link
                        key={breadcrumb.href}
                        underline="hover"
                        color="initial"
                        sx={{fontSize: "18px", textDecoration: "underline"}}
                        href={breadcrumb.href}
                    >
                        {breadcrumb.label}
                    </Link>
                );
            })}
        </MuiBreadcrumbs>
    );
};
