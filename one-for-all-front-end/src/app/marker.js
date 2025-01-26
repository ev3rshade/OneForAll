let map, service, infowindow;

export function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLoc, errHand);
    }
}

export function showLoc(key, pos) {
    const latt = pos.coords.latitude;
    const long = pos.coords.longitude;
    var lattlong = new google.maps.LatLng(latt, long);
    var OPTions = {
        center: lattlong,
        zoom: 10,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL,
        },
    };
    var mapg = new google.maps.Map(
        document.getElementById("demo2"),
        OPTions
    );
    var markerg = new google.maps.marker.AdvancedMarkerElement({
        key: key,
        position: lattlong,
        map: mapg,
    });
}

export function errHand(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            result.innerHTML =
                "The application doesn't have the permission" +
                "to make use of location services";
            break;
        case err.POSITION_UNAVAILABLE:
            result.innerHTML = 
                  "The location of the device is uncertain";
            break;
        case err.TIMEOUT:
            result.innerHTML = 
                  "The request to get user location timed out";
            break;
        case err.UNKNOWN_ERROR:
            result.innerHTML =
                "Time to fetch location information exceeded" +
                "the maximum timeout interval";
            break;
    }
}


export function initMap() {
  const center = { lat: 35.6620, lng: 139.7038 };  // shibuya
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15,  // Zoom in on the area to show nearby stores
  });

  infowindow = new google.maps.InfoWindow();

  // Create a Places service
  service = new google.maps.places.PlacesService(map);
  
  // Request nearby convenience stores
  service.nearbySearch({
    location: center,
    radius: 5000, // Search within 5km radius
    type: ['convenience_store'],  // Search for convenience stores
  }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((place) => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });

        // Add an info window that shows place name when clicked
        marker.addListener('click', () => {
          infowindow.setContent(`<div><strong>${place.name}</strong><br>${place.vicinity}</div>`);
          infowindow.open(map, marker);
        });
      });
    } else {
      console.error('Places search failed due to:', status);
    }
  });
}