import React, {useCallback, useState} from "react";

import {CityContext} from "./CityContext";
import {CityContextValue} from "./CityContextType";
import {getCities} from "../../services";

interface ICityProviderProps {
    children: React.ReactNode;
}

export function CityProvider({children}: ICityProviderProps) {
    const [cities, setCities] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const resetState = () => {
        setLoading(true);
    };

    const fetchCities = useCallback(async ()=> {
        resetState();
        try {
            const fetchedCities = await getCities();
            setCities(fetchedCities);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const contextValue: CityContextValue = {
        cities,
        loading,
        error,
        fetchCities
    };

    return (
        <CityContext.Provider value={contextValue}>
            {children}
        </CityContext.Provider>
    );
}
