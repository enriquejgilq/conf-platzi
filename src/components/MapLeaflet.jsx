import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
import '../styles/components/Map.css';



const MapLeaflet = () => {
    const defaultCenter = [19.4267261, -99.1718706]
   return (
    <div className='leaflet-container'>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin="anonymous"
        />

      <MapContainer center={[4.680449, -74.085157]} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[4.680449, -74.085157]}>
        <i className="fa-sharp fa-solid fa-location-pin"></i>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      </MapContainer> 
    </div>
  )
}

 
export default MapLeaflet