import React, { useState, useEffect } from 'react';
import MapContainer from '../component/detail/MapContainer';
import BasicLayout from '../layouts/BasicLayout';
import '../component/main/styles/GisPage.css';

function GisPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://localhost:9092/api/gis/get?latitude=${latitude}&longitude=${longitude}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlaces(data.documents || []);
      } catch (error) {
        console.error('Failed to fetch places:', error);
        setPlaces([]);
      }
    };

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            fetchPlaces(latitude, longitude);
          },
          error => {
            console.error('Geolocation error:', error);
            setPlaces([]);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setPlaces([]);
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <BasicLayout>
      <div className="GisContainer">
        <div className="GisSidebar">
          <ul>
            {places.map((place, index) => (
              <li key={index} className="GisPlaceItem">
                <p className="GisPlaceName">{place.place_name}</p>
                <p className="GisAddressName">{place.address_name}</p>
                <p className="GisPhone">{place.phone}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="GisMapContainer">
          <MapContainer places={places} />
        </div>
      </div>
    </BasicLayout>
  );
}

export default GisPage;

