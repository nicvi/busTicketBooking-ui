import { Box } from '@mui/material';
import {BusCardListProps} from "./BusCardListType";
import {BusCard} from "../../molecules";
import React from "react";

export const BusCardList: React.FC<BusCardListProps> = ({ busCards, onBookClick }) => (
    <Box>
        {busCards.map((card, idx) => (
            <BusCard
                key={idx}
                {...card}
                onBookClick={() => onBookClick(idx)}
            />
        ))}
    </Box>
);
