import { EnvManager } from "../config";

export const getCities = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${EnvManager.BACKEND_URL}/city/`);

        if (!response.ok) {
            throw new Error(`Failed to fetch cities: ${response.status} ${response.statusText}`)
        }

        const data = await response.json();
        return data as string[];
    } catch (error) {
        throw new Error(`Error getting cities: ${error instanceof Error ? error.message : String(error)}`);
    }
};
