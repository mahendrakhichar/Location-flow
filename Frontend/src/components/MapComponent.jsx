import React, { useEffect, useRef } from 'react';

const MapComponent = ({ onLocationSelect }) => {
  const mapRef = useRef(null);
  const MAP_API = VITE_MAPS_API_KEY;

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
      });

      const marker = new window.google.maps.Marker({
        map,
        draggable: true,
        position: map.getCenter(),
      });

      marker.addListener('dragend', (e) => {
        const coords = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        onLocationSelect(coords);
      });
    };

    // Load Google Maps script
    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API}&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => initMap();
    }
  }, [onLocationSelect]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
