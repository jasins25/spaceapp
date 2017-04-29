var markerCount = 0;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 17.277,
            lng: 121.807
        },
        zoom: 20,
        mapTypeId: 'satellite'
    });
    var bounds = new google.maps.LatLngBounds();

    map.addListener('click', function (e) {
        placeMarker(e.latLng, map);
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function placeMarker(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: true,
        icon: {
            url: "assets/images/solarPanel.png", // url
            scaledSize: new google.maps.Size(65, 65), // scaled size
            // origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(25, 25) // anchor
        }
    });
    markerCount++;
    markers.push(marker);
    var infowindow = new google.maps.InfoWindow({
        content: String(markerCount)
    });
    infowindow.open(map, marker);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
    markerCount = 0;
}