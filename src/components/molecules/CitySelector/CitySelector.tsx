import React from 'react';
import {Dropdown} from "../../atoms";
import {CitySelectorProps} from "./Types";
import {citySelectorStyle} from "./CitySelectorStyle";

export const CitySelector: React.FC<CitySelectorProps> = (
    { cities, origin, destination, onOriginChange, onDestinationChange }
) => {
    return (
        <div style={citySelectorStyle}>
            <Dropdown
                label="Origin City"
                options={cities}
                value={origin}
                onChange={onOriginChange}
            />
            <Dropdown
                label="Destination City"
                options={cities}
                value={destination}
                onChange={onDestinationChange}
            />
        </div>
    );
};
