'use client'

import React, { useState, useEffect, useRef } from 'react';
import { randomUUID } from 'crypto';

let center = []

let map;
let service;
var shelterMarkers = []

let counter = 0



const LocalMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [areMarkersVisible, setMarkersVisible] = useState(false);

  const googleMapsScriptLoaded = useRef(false);

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      shelterMarkers.forEach(marker => marker.setMap(null));  // Remove previous markers
      shelterMarkers = []; // Clear the previous markers
      results.forEach((place) => {
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });
        shelterMarkers.push(marker); // Store the markers
      });

      if (shelterMarkers.length === 0) {
        window.alert("no results");
      }
    }
  }

  function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLoc, errHand);
    } else {
      window.alert(
        "Geolocation is not supported by this browser."
      )
    }
  }

  function showLoc(pos) {
    center = [pos.coords.latitude, pos.coords.longitude]
    document.getElementById('head1').innerHTML = "latitude: " + center[0] + " longitude: " + center[1]
    setUserLocation(center)
  }

  function errHand(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            window.alert(
                "The application doesn't have the permission" +
                "to make use of location services"
            )
            break;
        case err.POSITION_UNAVAILABLE:
            window.alert(
                  "The location of the device is uncertain"
            )
            break;
        case err.TIMEOUT:
            window.alert(
                  "The request to get user location timed out"
            )
            break;
        case err.UNKNOWN_ERROR:
            window.alert(
                "Time to fetch location information exceeded" +
                "the maximum timeout interval"
            )
            break;
    }
  }


  
  useEffect(() => {
    if (userLocation && userLocation.length === 2 && counter === 0) {
      const loadGoogleMapsScript = (apiKey) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
        script.async = false;
        script.defer = true;
        document.body.appendChild(script);
        counter++
      };


      if(center.length == 2) {
        window.initMap = () => {
          map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: userLocation[0], lng: userLocation[1] }, // Coordinates for Shibuya, Japan
            zoom: 15,
            mapId: '28418a35f6a4c496',
          });

          service = new google.maps.places.PlacesService(map);


          /*shelterMarkers.forEach(store => {
            const marker = new window.google.maps.Marker({
              position: { lat: store.lat, lng: store.lng },
              map,
              title: store.title,
            });
            shelterMarkers.push(marker)
          });*/

        };
        
        loadGoogleMapsScript('AIzaSyC8IgCbDM5wbQoTwNGDLh4RZWk0ZKxm8hk');
        
     }
    } else {
      getlocation()
    }
  }, [userLocation, areMarkersVisible]);

  async function nearbySearch() {
    //@ts-ignore
    try {
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
      "places",
    );
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // Restrict within the map viewport.
    let startingPoint = new google.maps.LatLng(center[0], center[1]);
    const request = {
      // required parameters
      fields: ["displayName", "location", "businessStatus"],
      locationRestriction: {
        center: startingPoint,
        radius: 1000,
      },
      // optional parameters
      includedPrimaryTypes: ["restaurant"],
      maxResultCount: 5,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
    };
    //@ts-ignore
    const { places } = await Place.searchNearby(request)
    if (places.length) {
      console.log(places);
  
      const { LatLngBounds } = await google.maps.importLibrary("core");
      const bounds = new LatLngBounds();
      shelterMarkers = []
  
      // Loop through and get all the results.
      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });

        shelterMarkers.push(markerView)
  
        bounds.extend(place.location);
        console.log(place);
      });
      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  
  } catch (error) {
    window.alert(JSON.stringify(error));
  }
}

  const toggleMarkers = () => {
    setMarkersVisible(prevState => {
      console.log(prevState)
      const newState = !prevState;
      if(!prevState && shelterMarkers.length === 0) {
        nearbySearch().then(() => {
            shelterMarkers.forEach(marker => {
              marker.setMap(newState ? map : null);  // Show or hide markers
            });
          }
        )
      } else {
        shelterMarkers.forEach(marker => {
          marker.setMap(null);
        });
      }

      return newState;
      
    });
  };

  return (
    <div>
      <h1 id='head1'>coords dodododo</h1>
      <label>
          <input
            type="checkbox"
            checked={areMarkersVisible}
            onChange={toggleMarkers}
          />
          Show nearby shelters
        </label>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }} onClick={console.log("hello")}></button>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  )
}

export default LocalMap
