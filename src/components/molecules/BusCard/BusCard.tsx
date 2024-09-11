import { Box, Typography, Divider } from '@mui/material';
import React from "react";
import {Button, Icon, Price, TimeInfo} from "../../atoms";
import {BusCardProps} from "./BusCardType";



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
        {/* First Column */}
        <Box flex={3}>
            <TimeInfo departure={departureTime} travelTime={travelTime} arrival={arrivalTime} />
            <Box display="flex" justifyContent="space-between">
                <Typography>{origin}</Typography>
                <Typography>{destination}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Icon iconType={isDirect ? 'direct' : 'stop'} />
                <Box mx={1}>
                    {amenities.map((amenity, idx) => (
                        <Icon key={idx} iconType={amenity} />
                    ))}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Typography>{busStatus}</Typography>
            </Box>
        </Box>

        {/* Second Column */}
        <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Price price={price} />
            <Button text="Continue" onClick={onBookClick} />
        </Box>
    </Box>
);
