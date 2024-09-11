import React from 'react';
import {Dropdown} from "../../atoms";

interface CitySelectorProps {
    cities: string[];
    origin: string;
    destination: string;
    onOriginChange: (e:any) => void;
    onDestinationChange: (e:any) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = (
    { cities, origin, destination, onOriginChange, onDestinationChange }
) => {
    return (
        <div style={{ display: 'flex', gap: '16px' }}>
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

