import {createContext} from "react";
import {CityContextValue} from "./CityContextType";

export const CityContext = createContext<CityContextValue>({
    cities: [],
    error: "",
    loading: false,
    fetchCities: async () => []
});
