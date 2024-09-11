import {useEffect, useRef, useState} from "react";

import {
    ListSubheader,
    ListItemButton,
    ListItemText,
    Collapse,
    Box,
    List,
} from "@mui/material";

import {INestedItems} from "../../../models";
import INestedListProps from "./Types";
import {nestedListStyles} from "./NestedItems.styles";
import {Typography, Avatar} from "../../atoms";
import {Link, useNavigate} from "react-router-dom";

export function NestedList({subheader, clients}: INestedListProps) {
    const navigate = useNavigate();
    const selectedItemRef = useRef<HTMLDivElement>();
    const [clientList, setClientList] = useState<INestedItems[]>(clients);
    const handleClick = (clientObj: INestedItems) => {
        const newClients = clientList.map((client) => {
            const objOpen = clientObj.name === client.name;
            return {
                ...client,
                open: objOpen,
            };
        });
        if (clientObj.id) {
            navigate(`/client/${clientObj.id}`);
        } else if (clientObj.name === "Home") {
            navigate("/");
        } else {
            navigate(`/${clientObj.name}`);
        }
        setClientList(newClients);
    };

    useEffect(() => {
        const currentRef = selectedItemRef.current;
        if (currentRef && currentRef.scrollIntoView) {
            currentRef.scrollIntoView();
        }
    }, [clients]);

    return (
        <List
            data-testid="NestedItems-Container"
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        subheader && (
        <ListSubheader
            component="div"
    id="nested-list-subheader"
    sx={nestedListStyles.subHeader}
    >
    <Typography text={subheader} variant="h5" color={"textPrimary"} />
    </ListSubheader>
)
}
>
    {clientList.map((client, index) => (
        <Box
            key={`client-listItemButtom-${index}`}
        ref={client.open ? selectedItemRef : null}
        >
        <ListItemButton
            sx={[
                nestedListStyles.clientListItemButton,
        {backgroundColor: client.open ? "#C1EBFA" : "inherit"},
    ]}
        onClick={(event) => {
        event.stopPropagation();
        handleClick(client);
    }}
    >
        {" "}
        {typeof client.logo === "string" || client.logo === undefined ? (
            <Avatar
                alt={`${client.name}-logo`}
            src={client.logo as string}
            height={"25px"}
            width={"25px"}
            />
        ) : (
            client.logo
        )}
        <ListItemText
            primary={
            <Typography
        text={client.name}
        variant="h6"
        color={client.open ? "primary" : "textPrimary"}
        />
    }
        />
        </ListItemButton>
        <Collapse in={client.open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
    {client.projects?.map((project, index) => (
            <Link
                to={`#${project}`}
        style={{textDecoration: "none"}}
        key={`project-listItemButtom-${index}`}
    >
        <ListItemButton
            key={`project-listItemButtom-${index}`}
        sx={nestedListStyles.projectListItemButton}
        onClick={(event) => {
        event.stopPropagation();
        handleClick(client);
    }}
    >
        <ListItemText
            primary={
            <Typography
        text={project}
        variant="h6"
        color="primary"
            />
    }
        />
        </ListItemButton>
        </Link>
    ))}
        </List>
        </Collapse>
        </Box>
    ))}
    </List>
);
}
