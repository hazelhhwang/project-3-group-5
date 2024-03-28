document.addEventListener('DOMContentLoaded', function() {
    var streetMap = L.map('streetMap').setView([-37.8136, 144.9631], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(streetMap);

    var markers = {};

    function fetchCSVData(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(csv => Papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }))
            .then(result => {
                processCSVData(result.data);
            })
            .catch(error => console.error('Error loading CSV data:', error));
    }

    function processCSVData(data) {
        data.forEach(restaurant => {
            var cuisine = restaurant.cuisinetype || 'Other';
            var marker = L.marker([restaurant.latitude, restaurant.longitude]);
            var popupContent = `
                <strong>${restaurant.name}</strong><br>
                Cuisine: ${cuisine}<br>
                Price Level: ${restaurant.priceLevel}<br>
                Address: ${restaurant.address}
            `;
            marker.bindPopup(popupContent);

            if (!markers[cuisine]) {
                markers[cuisine] = [];
            }
            markers[cuisine].push(marker);
        });

        populateCuisineDropdown();
        filterMarkers('all');
    }

    // Consolidated and corrected function to populate the dropdown
    function populateCuisineDropdown() {
        const cuisineSelect = document.getElementById('cuisine-filter');
        const cuisines = Object.keys(markers).sort();
        cuisines.forEach(cuisine => {
            const option = document.createElement('option');
            option.value = option.textContent = cuisine;
            cuisineSelect.appendChild(option);
        });
    }

    function filterMarkers(cuisine) {
        Object.values(markers).flat().forEach(marker => streetMap.removeLayer(marker));
        
        const toAdd = cuisine === 'all' ? Object.values(markers).flat() : markers[cuisine];
        toAdd.forEach(marker => marker.addTo(streetMap));
    }

    document.getElementById('cuisine-filter').addEventListener('change', function(e) {
        filterMarkers(e.target.value);
    });

    fetchCSVData('data_with_coordinates.csv'); 
});

