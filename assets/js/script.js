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


let map;

function initMap() {
    const options = {
        zoom: 16,
        center: {lat: 27.686461, lng: 85.360379},
    }

    map = new google.maps.Map(
        document.getElementById('map'),
        options
    )

    let marker = new google.maps.Marker({
        position: {lat: 27.676214, lng: 85.398917},
        map:map,
        icon: 'https://img.icons8.com/fluent/48/000000/marker-storm.png'
    })

    let marker2 = new google.maps.Marker({
        position: {lat: 27.676260, lng: 85.398964},
        map:map,
        icon: 'https://img.icons8.com/fluent/48/000000/marker-storm.png'
    })
}

initMap();