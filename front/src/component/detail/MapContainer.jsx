import React, { useState, useEffect, useRef } from 'react';

function MapContainer() {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_GIS}&autoload=false&libraries=services`;
        script.async = true;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        setCurrentPosition({ lat, lon });
                        initializeMap(lat, lon);
                    }, error => {
                        console.error('Geolocation error:', error);
                        initializeMap(33.450701, 126.570667); // Default to Seoul City Hall if geolocation fails
                    });
                } else {
                    console.error('Geolocation is not supported by this browser.');
                    initializeMap(33.450701, 126.570667); // Default to Seoul City Hall if geolocation is not supported
                }
            });
        });

        return () => {
            document.head.removeChild(script);
        }
    }, []);

    const initializeMap = (latitude, longitude) => {
        const container = mapRef.current;
        const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
        setMap(map);

        // Create and place a marker on the map
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    };

    return (
        <div id="map" ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    );
}

export default MapContainer;