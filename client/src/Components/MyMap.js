import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import './MyMap.css'

const position = [51.505, -0.09];

const MyMap = (props) => (
  <Map center={position} zoom={13} id='map' className='z-0'>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/> 
      
      {props.data.map((marker) => {
        return (
          <Marker key={marker._id} position={marker.geo.coordinates}>
            <Popup>
              <span>
                {marker.text}</span>
            </Popup>
          </Marker>
        )
      })}
      
  </Map>
);

export default MyMap;