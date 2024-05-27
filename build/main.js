import { getRestaurants, getMenu } from "./fetchData.js";
const baseUrl = 'https://student-restaurants.azurewebsites.net/';
const restaurantsUrl = 'api/v1/restaurants';
// Get Restaurants and display them
const restaurants = await getRestaurants(baseUrl + restaurantsUrl);
const tbody = document.querySelector('tbody');
restaurants.forEach(element => {
    const tr = document.createElement('tr');
    const restaurantTd = document.createElement('td');
    const addressTd = document.createElement('td');
    const restaurantName = element.name;
    const address = element.address;
    restaurantTd.textContent = restaurantName;
    addressTd.textContent = address;
    tr.appendChild(restaurantTd);
    tr.appendChild(addressTd);
    tbody.appendChild(tr);
    tr.addEventListener("click", async () => {
        const menuChoiceModal = document.createElement('dialog');
        const chooseMenuText = document.createElement('p');
        chooseMenuText.textContent = 'Choose Menu:';
        const weekMenuButton = document.createElement('button');
        weekMenuButton.textContent = 'Weekly Menu';
        weekMenuButton.addEventListener('click', async () => {
            const weekMenu = await getMenu(baseUrl + `/api/v1/restaurants/weekly/${element._id}/${'fi'}`);
            openMenuModal(weekMenu);
            menuChoiceModal.close();
        });
        const dayMenuButton = document.createElement('button');
        dayMenuButton.textContent = 'Daily Menu';
        dayMenuButton.addEventListener('click', async () => {
            const dayMenu = await getMenu(baseUrl + `/api/v1/restaurants/daily/${element._id}/${'fi'}`);
            openMenuModal(dayMenu);
            menuChoiceModal.close();
        });
        menuChoiceModal.appendChild(chooseMenuText);
        menuChoiceModal.appendChild(weekMenuButton);
        menuChoiceModal.appendChild(dayMenuButton);
        document.body.appendChild(menuChoiceModal);
        menuChoiceModal.showModal();
    });
});
function openMenuModal(menu) {
    const menuModal = document.createElement('dialog');
    const menuContent = document.createElement('pre');
    menuContent.textContent = JSON.stringify(menu, null, 2);
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        menuModal.close();
    });
    menuModal.appendChild(menuContent);
    menuModal.appendChild(closeButton);
    document.body.appendChild(menuModal);
    menuModal.showModal();
}
