import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const [ipInfo, setIpInfo] = useState('');
  const position = [51.505, -0.09];

  useEffect(() => {
    axios
      .get('https://geo.ipify.org/api/v2/country?apiKey=at_noWYItGT5DZKkilO1ESsTJ4L4DVIc')
      .then((response) => {
        setIpInfo(response.data.ip);
      })
      .catch((error) => {
        console.log('Error occurred', error);
      });
  }, []);

  return (
    <div className="app-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100vw', height: '100vh',  position: 'static', top: '0', left: '0'  }}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="content-overlay">
        <img
          src="https://flagsapi.com/DE/flat/64.png"
          alt="Flag"
          style={{
            width: '100px',
            height: 'auto',
          }}
        />
        <h1 className="center-text">User's Geographical Information</h1>
        <p className="center-text">IP Address: {ipInfo}</p>
      </div>
    </div>
  );
}

export default App;
