document.addEventListener('DOMContentLoaded', function() {
    var streetMap = L.map('streetMap').setView([-37.8136, 144.9631], 13);
    
    // Add tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(streetMap);

    // Function to fetch CSV data and parse it
    function fetchCSVData(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(csv => Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }))
            .then(result => {
                // Call a function to process the CSV data and add markers
                addRestaurantMarkers(result.data, streetMap);
            })
            .catch(error => console.error('Error loading CSV data:', error));
    }

    // Function to add restaurant markers to the map
    function addRestaurantMarkers(data, map) {
        data.forEach(restaurant => {
            const marker = L.marker([restaurant.latitude, restaurant.longitude]).addTo(map);
            const popupContent = `
                <strong>${restaurant.name}</strong><br>
                Cuisine: ${restaurant.cuisinetype}<br>
                Price Level: ${restaurant.priceLevel}<br>
                Address: ${restaurant.address}
            `;
            marker.bindPopup(popupContent);
        });
    }

    // Fetch and process the CSV data
    fetchCSVData('updated_reviews.csv'); // Update the path to the location of your CSV file

    // Optionally, remove the marker for the center of Melbourne if it's not needed
});

