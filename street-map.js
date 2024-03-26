document.addEventListener('DOMContentLoaded', function() {
    var streetMap = L.map('streetMap').setView([-37.8136, 144.9631], 13);

    // Add tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(streetMap);

    // Object to hold markers keyed by cuisine type
    var markers = {};

    // Function to fetch CSV data and parse it
    function fetchCSVData(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(csv => Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }))
            .then(result => {
                // Process the CSV data
                processCSVData(result.data);
            })
            .catch(error => console.error('Error loading CSV data:', error));
    }

    // Process CSV data and create markers
    function processCSVData(data) {
        data.forEach(restaurant => {
            var cuisine = restaurant.cuisinetype || 'Other'; // Fallback for no cuisine type
            var marker = L.marker([restaurant.latitude, restaurant.longitude]);
            var popupContent = `
                <strong>${restaurant.name}</strong><br>
                Cuisine: ${cuisine}<br>
                Price Level: ${restaurant.priceLevel}<br>
                Address: ${restaurant.address}
            `;
            marker.bindPopup(popupContent);

            // Add the marker to the array of markers under the correct cuisine
            if (!markers[cuisine]) {
                markers[cuisine] = [];
            }
            markers[cuisine].push(marker);
        });

        // Populate cuisine dropdown and add all markers to the map initially
        populateCuisineDropdown();
        filterMarkers('all');
    }

    // Function to populate the dropdown with cuisine types
    function populateCuisineDropdown() {
        var cuisineSelect = document.getElementById('cuisine-filter');
        Object.keys(markers).forEach(function(cuisine) {
            var option = document.createElement('option');
            option.value = cuisine;
            option.textContent = cuisine;
            cuisineSelect.appendChild(option);
        });
    }

    // Function to filter markers by cuisine
    function filterMarkers(cuisine) {
        // Clear existing markers from the map
        Object.values(markers).flat().forEach(function(marker) {
            streetMap.removeLayer(marker);
        });

        // Add only the markers that match the selected cuisine type
        if (cuisine === 'all') {
            Object.values(markers).flat().forEach(function(marker) {
                marker.addTo(streetMap);
            });
        } else if (markers[cuisine]) {
            markers[cuisine].forEach(function(marker) {
                marker.addTo(streetMap);
            });
        }
    }

    // Event listener for the dropdown changes
    document.getElementById('cuisine-filter').addEventListener('change', function(e) {
        filterMarkers(e.target.value);
    });

    // Fetch and process the CSV data
    fetchCSVData('updated_reviews.csv'); 
});

