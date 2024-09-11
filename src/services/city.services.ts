import axios from "axios";
import {EnvManager} from "../config";


export const getCities = async (): Promise<string[]> => {
    try {
        const response = await axios.get<string[]>(
            `${EnvManager.BACKEND_URL}/city/`,
        );
        return response?.data;
    } catch {
        throw new Error("Error getting city");
    }
};
