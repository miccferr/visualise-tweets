import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './MyMap.css'


const position = [51.505, -0.09];

const MyMap = (
  <Map center={position} zoom={13} id='map' className='z-0'>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

export default MyMap;