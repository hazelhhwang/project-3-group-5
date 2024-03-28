// Wait for the DOM content to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data
    fetch('static/data/restaurants_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const restaurantsData = data;
            console.log(restaurantsData);
            populatePriceLevelDropdown(restaurantsData);
            displayRestaurants(restaurantsData);
        })
        .catch(error => console.error('Error fetching JSON:', error));

    // Function to populate the price level dropdown
    function populatePriceLevelDropdown(restaurantsData) {
        // Define the custom sort order
        const sortOrder = {
            '$': 0,            // Assigning '$' the lowest value
            '$$ - $$$': 1,     // Middle value for '$$ - $$$'
            '$$$$': 2          // Highest value for '$$$$'
        };

        // Extract the unique price levels from the data
        const priceLevels = [...new Set(restaurantsData.map(r => r.priceLevel))];

        // Sort the price levels based on the custom sort order
        priceLevels.sort((a, b) => sortOrder[a] - sortOrder[b]);

        // Get the dropdown element
        const dropdown = document.getElementById('priceLevelFilter');
        dropdown.innerHTML = ''; // Clear existing options

        // Add a default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.innerText = 'Select Price Level';
        dropdown.appendChild(defaultOption);

        // Add the sorted price levels as options to the dropdown
        priceLevels.forEach(level => {
            if (level) { // Check if level is not null or undefined
                const option = document.createElement('option');
                option.value = level;
                option.innerText = level;
                dropdown.appendChild(option);
            }
        });
    }

    // Function to display top 10 restaurants based on the selected price level
    function displayRestaurants(restaurantsData, priceFilter = '') {
        const container = document.getElementById('restaurantsContainer');
        container.innerHTML = ''; // Clear existing content

        const filteredRestaurants = restaurantsData.filter(r => 
        priceFilter === '' || r.priceLevel === priceFilter
        );

        // Sort the filtered restaurants by number of reviews in descending order
        filteredRestaurants.sort((a, b) => b.numberOfReviews - a.numberOfReviews);

        // Get the top 10 restaurants
        const top10Restaurants = filteredRestaurants.slice(0, 10);

        // Now display the top 10 restaurants
        top10Restaurants.forEach(restaurant => {
            const div = document.createElement('div');
            div.innerHTML = `<h4>${restaurant.name}</h4>
                             <p>${restaurant.address}</p>
                             <p>Cuisine: ${restaurant.cuisinetype}, Price: ${restaurant.priceLevel}</p>
                             <p>Reviews: ${restaurant.numberOfReviews}</p>`;
            container.appendChild(div);
        });
}


    // Event listener for the price level filter dropdown
    document.getElementById('priceLevelFilter').addEventListener('change', function() {
        const selectedFilter = this.value;
        fetch('static/data/restaurants_data.json')
            .then(response => response.json())
            .then(data => {
                displayRestaurants(data, selectedFilter);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
});
