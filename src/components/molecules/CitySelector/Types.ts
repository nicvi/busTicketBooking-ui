export interface CitySelectorProps {
    cities: string[];
    origin: string;
    destination: string;
    onOriginChange: (e:any) => void;
    onDestinationChange: (e:any) => void;
}