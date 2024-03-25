document.addEventListener('DOMContentLoaded', function() {
    var streetMap = L.map('streetMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(streetMap);

    // Optionally, add a marker at the center of Melbourne
    L.marker([-37.8136, 144.9631]).addTo(map)
        .bindPopup('The heart of Melbourne.').openPopup();
});

