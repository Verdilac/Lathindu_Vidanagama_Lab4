const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function updateISSLocation() {
    try {
        const response = await fetch(API_URL);
        const { latitude, longitude } = await response.json();

        document.getElementById('latitudeReading').textContent = latitude;
        document.getElementById('longitudeReading').textContent = longitude;

        const [lat, lon] = [parseFloat(latitude), parseFloat(longitude)];

        map.setView([lat, lon], 5);

        const issMarker = L.marker([lat, lon]).addTo(map);
        issMarker.openPopup();
    } catch (error) {
        console.error("Error getting location:", error);
    }
}

updateISSLocation();




