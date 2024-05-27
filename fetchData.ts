import { Restaurant, Menu } from "./Types";

export const getRestaurants = async (url: string): Promise<Restaurant[]> => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data: Restaurant[] = await response.json();
            return data;
        } else {
            console.log("Error: Check your code");
            return [];
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

export const getMenu = async (url: string): Promise<Menu[]> => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data: Menu[] = await response.json();
            return data;
        } else {
            console.log("Error: Check your code");
            return [];
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

