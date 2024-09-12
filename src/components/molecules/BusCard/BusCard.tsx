import React from "react";

import { Box, Divider } from '@mui/material';
import {Button, Icon, Price, TimeInfo, Typography} from "../../atoms";
import {BusCardProps} from "./Types";



export const BusCard: React.FC<BusCardProps> = ({
                                                             departureTime,
                                                             travelTime,
                                                             arrivalTime,
                                                             origin,
                                                             destination,
                                                             isDirect,
                                                             amenities,
                                                             busStatus,
                                                             price,
                                                             onBookClick,
                                                         }) => (
    <Box display="flex" justifyContent="space-between" padding={2} border={1} borderRadius={2} mb={2}>
        <Box flex={3}>
            <TimeInfo departure={departureTime} travelTime={travelTime} arrival={arrivalTime} />
            <Box display="flex" justifyContent="space-between">
                <Typography text={origin} variant={"body2"}/>
                <Typography text={destination} variant={"body2"}/>
            </Box>
            <Box display="flex" alignItems="center">
                <Icon iconType={isDirect ? 'direct' : 'stop'} />
                <Box mx={1}>
                    {amenities.map((amenity, idx) => (
                        <Icon key={idx} iconType={amenity} />
                    ))}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Typography text={busStatus} variant={"body2"}/>
            </Box>
        </Box>

        <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Price price={price} />
            <Button text="Continue" onClick={onBookClick} />
        </Box>
    </Box>
);
