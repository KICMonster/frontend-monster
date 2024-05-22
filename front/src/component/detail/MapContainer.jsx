import React, { useEffect, useRef, useState } from 'react';
const apiKey = import.meta.env.VITE_GIS;

function MapContainer() {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [infowindow, setInfowindow] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
        script.async = true;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                const container = mapRef.current;
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);
                setMap(map);

                const marker = new window.kakao.maps.Marker();
                setMarker(marker);

                const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
                setInfowindow(infowindow);

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const locPosition = new window.kakao.maps.LatLng(lat, lon);
                        const message = '<div style="padding:5px;">여기에 계신가요?!</div>';
                        displayMarker(locPosition, message, map, marker, infowindow);
                    });
                } else {
                    const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
                    const message = 'geolocation을 사용할수 없어요..';
                    displayMarker(locPosition, message, map, marker, infowindow);
                }

                window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
                    searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                        if (status === window.kakao.maps.services.Status.OK) {
                            let detailAddr = result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                            detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                            const content = '<div class="bAddr"><span class="title">법정동 주소정보</span>' + detailAddr + '</div>';
                            marker.setPosition(mouseEvent.latLng);
                            marker.setMap(map);
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                        }
                    });
                });

                function searchDetailAddrFromCoords(coords, callback) {
                    const geocoder = new window.kakao.maps.services.Geocoder();
                    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                }
            });
        });

        return () => script.remove();
    }, []);

    function displayMarker(locPosition, message, map, marker, infowindow) {
        marker.setPosition(locPosition);
        marker.setMap(map);
        infowindow.setContent(message);
        infowindow.open(map, marker);
        map.setCenter(locPosition);
    }

    return (
        <div id="map" ref={mapRef} style={{ width: '1000px', height: '500px' }}></div>
    );
}

export default MapContainer;