document.addEventListener('DOMContentLoaded', function() {
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);

    // Define color scheme for the legend
    var legendColors = {
        '0-100': 'blue',
        '101-300': 'green',
        '301-500': 'yellow',
        '501-1000': 'orange',
        '1000+': 'red'
    };

    // Load and parse the JSON data
    fetch('static/data/data_with_coordinates.json')
        .then(response => response.json())
        .then(restaurantData => {
            // Define legend ranges and colors arrays
            var legendRanges = [];
            var legendColorsArr = [];

            // Iterate over the data to create markers for each restaurant
            restaurantData.forEach(function(restaurant) {
                var name = restaurant.name;
                var cuisineType = restaurant.cuisinetype;
                var numberOfReviews = restaurant.numberOfReviews;
                var latitude = restaurant.latitude;
                var longitude = restaurant.longitude;

                // Define marker style based on the number of reviews
                var fillColor;
                if (numberOfReviews <= 100) {
                    fillColor = legendColors['0-100'];
                } else if (numberOfReviews <= 300) {
                    fillColor = legendColors['101-300'];
                } else if (numberOfReviews <= 500) {
                    fillColor = legendColors['301-500'];
                } else if (numberOfReviews <= 1000) {
                    fillColor = legendColors['501-1000'];
                } else {
                    fillColor = legendColors['1000+'];
                }

                var markerStyle = {
                    radius: 8, // Fixed size for all markers
                    fillColor: fillColor,
                    color: '#fff',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                };

                // Create marker for each restaurant
                var marker = L.circleMarker([latitude, longitude], markerStyle)
                    .bindPopup(`<b>${name}</b><br>${cuisineType}<br>Reviews: ${numberOfReviews}`)
                    .addTo(heatMap);
            });

            // Populate legend arrays
            for (var range in legendColors) {
                legendRanges.push(range);
                legendColorsArr.push(legendColors[range]);
            }

            // Add legend to the map
            var legend = L.control({position: 'bottomright'});
            legend.onAdd = function(map) {
                var div = L.DomUtil.create('div', 'legend');
                div.innerHTML += '<h4>Number of Reviews</h4>';
                for (var i = 0; i < legendRanges.length; i++) {
                    div.innerHTML += `<div><i style="background:${legendColorsArr[i]}"></i>${legendRanges[i]}</div>`;
                }
                return div;
            };
            legend.addTo(heatMap);

            // Function to update the legend
            function updateLegend() {
                // Clear existing legend content
                var legendDiv = document.querySelector('.legend');
                legendDiv.innerHTML = '<h4>Number of Reviews</h4>';
                // Populate legend with updated values
                for (var i = 0; i < legendRanges.length; i++) {
                    legendDiv.innerHTML += `<div><i style="background:${legendColorsArr[i]}"></i>${legendRanges[i]}</div>`;
                }
            }
        })
        .catch(error => console.error('Error loading JSON data:', error));
});



