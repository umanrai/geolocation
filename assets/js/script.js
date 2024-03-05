const locationResult = document.querySelector('#locationResult');
document.querySelector('#getLocation').addEventListener('click', () => {
    locationResult.textContent = 'Retrieving User Location...'

    function success(position) {
        let { coords } = position;
        locationResult.textContent = 'See my location on a map';
        locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
    }

    navigator.geolocation.getCurrentPosition(success);
});


function initMap() {
    const options = {
        zoom: 16,
        center: { lat: 27.676310 , lng: 85.398966 }
    }

    let map = new google.maps.Map(
        document.getElementById('map'),
        options
    )
}

initMap();