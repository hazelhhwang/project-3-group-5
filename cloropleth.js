document.addEventListener('DOMContentLoaded', function() {
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);


    // URL to GeoJSON file containing region boundaries
    var geojsonUrl = 'URL: https://opendata.arcgis.com/datasets/da1c06e3ab6948fcb56de4bb3c722449_0.geojson';

    // Fetch GeoJSON data
    fetch(geojsonUrl)
        .then(response => response.json())
        .then(geojsonData => {
            // Add GeoJSON layer to the map
            L.geoJSON(geojsonData, {
                style: function(feature) {
                    // Customize style based on data properties
                    var value = feature.properties.value; // Change 'value' to the name of the property containing your data
                    return {
                        fillColor: getColor(value), // Function to determine fill color based on data value
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Add popup with data information to each feature
                    var popupContent = "Region: " + feature.properties.name + "<br>" +
                                       "Value: " + feature.properties.value; // Change 'name' and 'value' to match your data properties
                    layer.bindPopup(popupContent);
                }
            }).addTo(map);
        });

    // Function to determine fill color based on data value
    function getColor(value) {
        // Define color scale based on your data range
        return value > 1000 ? '#800026' :
               value > 500  ? '#BD0026' :
               value > 200  ? '#E31A1C' :
               value > 100  ? '#FC4E2A' :
               value > 50   ? '#FD8D3C' :
               value > 20   ? '#FEB24C' :
               value > 10   ? '#FED976' :
                              '#FFEDA0';
    }

