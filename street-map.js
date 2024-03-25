document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to Melbourne's coordinates
    var map = L.map('streetMap').setView([-37.8136, 144.9631], 13);

    // Add an OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Optionally, add a marker at the center of Melbourne
    L.marker([-37.8136, 144.9631]).addTo(map)
        .bindPopup('The heart of Melbourne.').openPopup();
});

