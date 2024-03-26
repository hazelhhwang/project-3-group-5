import fetch from 'node-fetch';

document.addEventListener('DOMContentLoaded', async function() {
    var heatMap = L.map('heatMap').setView([-37.8136, 144.9631], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(heatMap);

    // Function to fetch postcode coordinates from AusPost API
    async function fetchPostcodeCoordinates(postcode) {
        const query = new URLSearchParams({
            pc: 'string',
            types: 'PO'
        }).toString();
      
        const resp = await fetch(
            `https://digitalapi.auspost.com.au/locations/v2/points/postcode/${postcode}?${query}`,
            {
                method: 'GET',
                headers: {
                    'AUTH-KEY': process.env.AUSPOST_API_KEY
                }
            }
        );

        const data = await resp.json();
        if (data && data.locations && data.locations.length > 0) {
            const location = data.locations[0].point;
            return [location.latitude, location.longitude];
        } else {
            console.error(`No coordinates found for postcode ${postcode}`);
            return null;
        }
    }

    // Load and parse the CSV data
    Papa.parse('updated_reviews1.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: async function(results) {
            // Access the parsed data
            var restaurantData = results.data;

            // Create an object to store the number of reviews for each postcode
            var postcodeReviews = {};

            // Iterate over the data to populate the postcodeReviews object
            for (let restaurant of restaurantData) {
                var postcode = restaurant.Postcode;
                var reviews = restaurant.numberOfReviews;

                // If the postcode is not already in the object, initialize it
                if (!postcodeReviews[postcode]) {
                    postcodeReviews[postcode] = 0;
                }

                // Increment the number of reviews for the postcode
                postcodeReviews[postcode] += reviews;
            }

            // Create an array of LatLng points based on the postcode and its number of reviews
            var heatMapData = [];
            for (let postcode in postcodeReviews) {
                let coordinates = await fetchPostcodeCoordinates(postcode);
                if (coordinates) {
                    heatMapData.push(coordinates.concat(postcodeReviews[postcode]));
                }
            }

            // Create the heat layer using the heatMapData array
            var heat = L.heatLayer(heatMapData, {
                radius: 20,
                blur: 15,
                maxZoom: 17,
            }).addTo(heatMap);
        }
    });
});







