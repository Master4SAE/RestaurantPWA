export interface Restaurant {
    _id: string;
    companyId: number;
    name: string;
    address: string;
    postalCode: string;
    city: string;
    phone: string;
    location: {
        type: string;
        coordinates: number[];
    };
    company: string;
};
export interface Menu {
    days: {
        date: string;
        courses: {
            name: string;
            price: string;
            diets: string;
        }
    }
};