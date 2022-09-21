import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };
  const defaulCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBb7YOVKYTAl4OzTligkNJa0wUfQc7CaQo">
        <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaulCenter}>
          <Marker position={defaulCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
