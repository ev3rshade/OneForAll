<<<<<<< HEAD
import Image from "next/image";
import Link from 'next/link';

=======
'use client'

import React, { useState, useEffect } from 'react';
import { randomUUID } from 'crypto';

let center = []

let map;
let service;
var shelterMarkers = []



const ShibuyaConvenienceStoresMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [areMarkersVisible, setMarkersVisible] = useState(false);

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
    if (userLocation && userLocation.length === 2) {
      const loadGoogleMapsScript = (apiKey) => {
        if (!document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap"]`)) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap&mapids=28418a35f6a4c496`;
          script.async = false;
          script.defer = true;
          document.body.appendChild(script);
        }
      };


      if(center.length == 2) {
        window.initMap = () => {
          map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: userLocation[0], lng: userLocation[1] }, // Coordinates for Shibuya, Japan
            zoom: 15,
          });

          service = new google.maps.places.PlacesService(map);


          shelterMarkers.forEach(store => {
            const marker = new window.google.maps.Marker({
              position: { lat: store.lat, lng: store.lng },
              map,
              title: store.title,
            });
            shelterMarkers.push(marker)
          });

        };
        
        loadGoogleMapsScript('AIzaSyC8IgCbDM5wbQoTwNGDLh4RZWk0ZKxm8hk');
        
     }
    } else {
      getlocation()
    }
  }, [userLocation, areMarkersVisible]);

  async function nearbySearch() {
    //@ts-ignore
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
        radius: 500,
      },
      // optional parameters
      includedPrimaryTypes: ["restaurant"],
      rankPreference: SearchNearbyRankPreference.POPULARITY,
    };
    //@ts-ignore
    const { places } = await Place.searchNearby(request);
  
    if (places.length) {
      console.log(places);
  
      const { LatLngBounds } = await google.maps.importLibrary("core");
      const bounds = new LatLngBounds();
  
      // Loop through and get all the results.
      places.forEach((place) => {
        const marker = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });
        
        shelterMarkers.push(marker)
        bounds.extend(place.location);
        console.log(place);
      });
      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  }

  const toggleMarkers = () => {
    setMarkersVisible(prevState => {
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
          marker.setMap(newState ? map : null);  // Show or hide markers
        });
      }

      return newState;
      
    });
  };
>>>>>>> b509017867c6b6f219346980a386b41d1c51e44b

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Home</div>
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
        <Link href="/login" className="">
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
    
    <main className="flex flex-col gap-0 row-start-2 items-center mt-40">
      <main className="flex flex-col gap-2 row-start-4 items-center">
        <Image
          className="dark:invert"
          src="/womenFinal.png"
          alt="Next.js logo"
          width={350}
          height={350}
          priority
        />        
      </main>


      <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            You Are Not Alone
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            We provide a safe space, resources, and guidance for women in abusive households. 
            No matter where you are in your journey, we’re here to help you take the next step.
          </p>
          <Link href="/EmergencyAndCrisis">
            <button className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow hover:bg-pink-700 transition-all">
              Get Immediate Help
            </button>
          </Link>
        </section>

      {/* Resources Section */}
      <section className="mt-16 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Support Tools
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Legal Advocacy</h3>
            <p className="text-gray-600 mb-4">
              Learn about your legal rights, access legal assistance, and take steps to ensure your safety.
            </p>
            <Link href="/LegalAdvocacy" className="text-pink-500 hover:underline">
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Emergency Contacts</h3>
            <p className="text-gray-600 mb-4">
              Access 24/7 hotlines, shelters, and resources to find immediate support.
            </p>
            <Link href="/EmergencyAndCrisis" className="text-pink-500 hover:underline">
              View Resources
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Reflection Tools</h3>
            <p className="text-gray-600 mb-4">
              Empower yourself by exploring self-reflection exercises to identify and process your situation.
            </p>
            <Link href="/ReflectionTools" className="text-pink-500 hover:underline">
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="mt-16 text-center max-w-4xl">
        <blockquote className="text-xl italic text-gray-700">
          “The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.”
        </blockquote>
        <p className="mt-4 text-pink-600 font-bold">– Anonymous</p>
      </section>
      </main>
    </main>
    </div>
  );
}
=======
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
  );
};

export default ShibuyaConvenienceStoresMap;
>>>>>>> b509017867c6b6f219346980a386b41d1c51e44b
