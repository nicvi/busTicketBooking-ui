export interface BusCardProps {
    departureTime: string;
    travelTime: string;
    arrivalTime: string;
    origin: string;
    destination: string;
    isDirect: boolean;
    amenities: string[];
    busStatus: string;
    price: string;
    onBookClick: () => void;
}
