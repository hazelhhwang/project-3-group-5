document.addEventListener('DOMContentLoaded', function() {
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);

    // Load and parse CSV data using PapaParse
    Papa.parse('updated_reviews1.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            // Store parsed data in the 'restaurantData' array
            var restaurantData = results.data;

            // Now you can proceed with processing the restaurant data
            // For example, you can call a function to create the heatmap using this data
            createHeatmap(restaurantData);
        }
    });

    // Function to create heatmap based on restaurant data
    function createHeatmap(data) {
        // Your code to create the heatmap based on the 'data' array goes here
        // Iterate over the 'data' array to extract necessary information (e.g., latitude, longitude, number of reviews)
        // Then, use this information to create a heatmap layer using Leaflet or any other heatmap library
        // Example:
        var heatmapData = [];
        data.forEach(function(restaurant) {
            var lat = restaurant.latitude;
            var lng = restaurant.longitude;
            var reviews = restaurant.numberOfReviews || 0; // Fallback for missing data
            heatmapData.push([lat, lng, reviews]);
        });

        // Create and add heatmap layer to the map
        L.heatLayer(heatmapData, { radius: 25 }).addTo(heatMap);
    }
});


