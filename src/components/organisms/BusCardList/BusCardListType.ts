export interface BusCardListProps {
    busCards: {
        departureTime: string;
        travelTime: string;
        arrivalTime: string;
        origin: string;
        destination: string;
        isDirect: boolean;
        amenities: string[];
        busStatus: string;
        price: string;
    }[];
    onBookClick: (busIndex: number) => void;
}