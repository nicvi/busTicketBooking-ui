interface CityState {
    cities: string[];
    loading: boolean;
    error: string;
}

interface CityActions {
    fetchCities: () => { };
}

export interface CityContextValue extends CityState, CityActions {}
