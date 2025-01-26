'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

let center = [];
let map;
let service;
let shelterMarkers = [];

export default function ResourceHub() {
  const [userLocation, setUserLocation] = useState(null);
  const [areMarkersVisible, setMarkersVisible] = useState(false);
  const [isMapInitialized, setMapInitialized] = useState(false);
  const [showFoodPantries, setShowFoodPantries] = useState(false); // State for food pantries checkbox
  const [showLibraries, setShowLibraries] = useState(false); // State for libraries checkbox

  const getlocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLoc, errHand);
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  };

  const showLoc = (pos) => {
    center = [pos.coords.latitude, pos.coords.longitude];
    setUserLocation(center);
  };

  const errHand = (err) => {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        window.alert("The application doesn't have the permission to use location services.");
        break;
      case err.POSITION_UNAVAILABLE:
        window.alert('The location of the device is uncertain.');
        break;
      case err.TIMEOUT:
        window.alert('The request to get user location timed out.');
        break;
      case err.UNKNOWN_ERROR:
        window.alert('An unknown error occurred while fetching location information.');
        break;
    }
  };

  useEffect(() => {
    if (userLocation && userLocation.length === 2) {
      const loadGoogleMapsScript = (apiKey) => {
        if (
          !document.querySelector(
            `script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap"]`
          )
        ) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        }
      };

      window.initMap = () => {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: userLocation[0], lng: userLocation[1] },
          zoom: 15,
        });

        service = new google.maps.places.PlacesService(map);
        setMapInitialized(true);
      };

      loadGoogleMapsScript('AIzaSyC8IgCbDM5wbQoTwNGDLh4RZWk0ZKxm8hk');
    } else {
      getlocation();
    }
  }, [userLocation]);

  const nearbySearch = async () => {
    if (!isMapInitialized || !service) {
      window.alert('Google Maps PlacesService is not initialized yet.');
      return;
    }

    const request = {
      location: new google.maps.LatLng(center[0], center[1]),
      radius: 500,
      type: ['shelter'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        shelterMarkers.forEach((marker) => marker.setMap(null));
        shelterMarkers = [];
        results.forEach((place) => {
          const marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });
          shelterMarkers.push(marker);
        });
      } else {
        console.error('Error fetching nearby places:', status);
      }
    });
  };

  const toggleMarkers = () => {
    setMarkersVisible((prevState) => {
      const newState = !prevState;
      if (!prevState && shelterMarkers.length === 0) {
        nearbySearch();
      } else {
        shelterMarkers.forEach((marker) => {
          marker.setMap(newState ? map : null);
        });
      }
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Resource Hub</div>
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <Link href="/ResourceHub" className="hover:font-bold">
            Resource Hub
          </Link>
          <Link href="/DocumentVault" className="hover:font-bold">
            Document Vault
          </Link>
          <Link href="/LegalAdvocacy" className="hover:font-bold">
            Legal Advocacy
          </Link>
          <Link href="/ReflectionTools" className="hover:font-bold">
            Reflection Tools
          </Link>
          <Link href="/EmergencyAndCrisis" className="hover:font-bold">
            Emergency and Crisis
          </Link>
          <Link href="/login">
            <Image
              className="dark:invert"
              src="/iconLogin.png"
              alt="Next.js logo"
              width={50}
              height={8}
              priority
            />
          </Link>
        </div>
      </nav>
      <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center rounded-b-xl mb-12 mt-24">  
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Resource Hub</h1>
          <p className="text-xl mb-8">Welcome to the Resource Hub, a user-friendly platform designed to connect you with nearby shelters using an interactive Google Map. Easily toggle markers to discover essential resources within your area, all at the click of a button.</p>
          <p className="italic text-xl mb-0">(If you don't see the map, try refreshing!)</p>
        </div>
      </section>
      <div className="pt-3 px-6 mb-24 grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        <div className="col-span-4" id="map" style={{ width: '100%', height: '500px' }}></div>
        <div className="flex flex-col items-start">
          <label className="flex items-center gap-2 pt-3">
            <input
              type="checkbox"
              checked={areMarkersVisible}
              onChange={toggleMarkers}
            />
            Show nearby shelters
          </label>
           
          <label className="flex items-center gap-2 pt-5">
            <input
              type="checkbox"
              checked={showFoodPantries}
              onChange={() => setShowFoodPantries(!showFoodPantries)} // Toggles the state for food pantries
            />
            Show nearby food pantries (example)
          </label>
          <label className="flex items-center gap-2 pt-5">
            <input
              type="checkbox"
              checked={showLibraries}
              onChange={() => setShowLibraries(!showLibraries)} // Toggles the state for libraries
            />
            Show nearby libraries (example)
          </label>
        </div>
      </div>
    </div>
  );
}
