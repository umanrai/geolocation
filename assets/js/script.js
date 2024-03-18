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

// Array of markers
let markers = [
    {
        coordinates: { lat: 27.675342, lng: 85.397440 },
        iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        content: '<h4>Bhat-Bhateni</h4>'
    },
    {
        coordinates: { lat: 27.690167, lng: 85.356244 },
        iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        content: '<h4>Runway</h4>'
    },
    {
        coordinates: { lat: 27.701945, lng: 85.376121 },
        content: '<h4>Raut-Ghar</h4>'
    }
]

function initMap() {
    const options = {
        zoom: 16,
        center: { lat: 27.686461, lng: 85.360379 },
    }

    map = new google.maps.Map(
        document.getElementById('map'),
        options
    )

    let marker = new google.maps.Marker({
        position: { lat: 27.676258, lng: 85.398997 },
        map: map
    })

    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    //Listen to map click
    google.maps.event.addListener(map, 'click', function (event) {
        addMarker({ coordinates: event.latLng })
    })

    //Direction
    //drawDirection()

    // addMarker(
    //     {
    //         coordinates: {lat: 27.675342, lng: 85.397440},
    //         iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
    //         content: '<h4>Bhat-Bhateni</h4>'
    //     }
    // )

    // addMarker(
    //     {
    //         coordinates: {lat: 27.690167, lng: 85.356244},
    //         iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
    //         content: '<h4>Runway</h4>'
    //     }
    // )

}

function addMarker(prop) {
    let marker = new google.maps.Marker({
        position: prop.coordinates,
        map: map
        // icon: prop.iconImage
    });

    //Check if there is iconImage, if yes then provide iconImage Or provide default icon
    if (prop.iconImage) {
        marker.setIcon(prop.iconImage)
    }

    if (prop.content) {
        let informaton = new google.maps.InfoWindow({
            content: prop.content
        })
        //With this listener, we are showing the content in map
        marker.addListener('click', function () {
            informaton.open(map, marker)
        })
    }


}

// function drawDirection() {
//     const directionService = new google.maps.DirectionsService();
//     const directionRenderer = new google.maps.DirectionsRenderer();

//     directionRenderer.setMap(map)

//     calculationAndDisplayRoute(directionService, directionRenderer)

// }

// function calculationAndDisplayRoute(directionService, directionRenderer) {
//     const start = { lat: 27.676258, lng: 85.398997 }
//     const end = {  lat: 27.675342, lng: 85.397440 }
//     const request = {
//         origin: start,
//         destination: end,
//         travelMode: google.maps.DirectionsTravelMode.DRIVING
//     }

//     directionService.route(request, function (response, status) {
//        if( status === google.maps.DirectionsStatus.OK ) {
//            directionRenderer.setDirections(response)
//        }
//     });

// }