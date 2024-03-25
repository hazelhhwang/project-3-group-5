document.addEventListener('DOMContentLoaded', function() {
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);


});


