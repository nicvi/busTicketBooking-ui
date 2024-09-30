import {getCities} from "../city.services";
import {EnvManager} from "../../config";

describe('getCities', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return cities when the API call is successful', async () => {
        const mockCities = ['City A', 'City B', 'City C'];
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockCities),
            } as Response)
        );

        const cities = await getCities();

        expect(fetch).toHaveBeenCalledWith(`${EnvManager.BACKEND_URL}/city/`);
        expect(cities).toEqual(mockCities);
    });

    it('should throw an error when the API call fails with a non-2xx status code', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                status: 500,
                statusText: 'Internal Server Error',
            } as Response)
        );

        await expect(getCities()).rejects.toThrow('Failed to fetch cities: 500 Internal Server Error');

        expect(fetch).toHaveBeenCalledWith(`${EnvManager.BACKEND_URL}/city/`);
    });

    it('should throw an error if fetch throws an exception', async () => {
        global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

        await expect(getCities()).rejects.toThrow('Error getting cities: Network error');

        expect(fetch).toHaveBeenCalledWith(`${EnvManager.BACKEND_URL}/city/`);
    });
});