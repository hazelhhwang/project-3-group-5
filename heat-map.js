document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map for the heat map visualisation
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);

    // Add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);

});


