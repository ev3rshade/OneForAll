'use client'

import React, { useState, useEffect } from 'react';
import { randomUUID } from 'crypto';

import { getlocation, showLoc, errHand } from './marker';

import { CheckBox } from '../../components/checkbox';

let map;
var markers = []

const ShibuyaConvenienceStoresMap = () => {
  const [areMarkersVisible, setMarkersVisible] = useState(true);
  useEffect(() => {
    const loadGoogleMapsScript = (apiKey) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    window.initMap = () => {
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6586, lng: 139.7454 }, // Coordinates for Shibuya, Japan
        zoom: 15,
      });

      const convenienceStores = [
        { lat: 35.6591, lng: 139.7008, title: '7-Eleven Shibuya' },
        { lat: 35.6597, lng: 139.6995, title: 'FamilyMart Shibuya' },
        { lat: 35.6603, lng: 139.7021, title: 'Lawson Shibuya' },
        { lat: 35.6578, lng: 139.7446, title: '7-Eleven Shibuya' },
        { lat: 35.6563, lng: 139.7457, title: 'Lawson Shibuya' },
        { lat: 35.6580, lng: 139.7480, title: 'FamilyMart Shibuya' },
        { lat: 35.6593, lng: 139.7430, title: '7-Eleven Shibuya' },
      ];

      convenienceStores.forEach(store => {
        const marker = new window.google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map,
          title: store.title,
        });
        markers.push(marker)
      });

    };

    loadGoogleMapsScript('AIzaSyC8IgCbDM5wbQoTwNGDLh4RZWk0ZKxm8hk');
  }, []);

  function initialize(){
    var mapProp = {
        center: new google.maps.LatLng(38, -78),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapProp);
};

  const toggleMarkers = () => {
    setMarkersVisible(prevState => {
      const newState = !prevState;
      markers.forEach(marker => {
        marker.setMap(newState ? map : null);  // Show or hide markers
      });
      return newState;
    });
  };

  return (
    <div>
      <label>
          <input
            type="checkbox"
            checked={areMarkersVisible}
            onChange={toggleMarkers}
          />
          Show/Hide Markers
        </label>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }} onClick={getlocation}></button>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default ShibuyaConvenienceStoresMap;