export const getRestaurants = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.log("Error: Check your code");
            return [];
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};
export const getMenu = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.log("Error: Check your code");
            return [];
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};
