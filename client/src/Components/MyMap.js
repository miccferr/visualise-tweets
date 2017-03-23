import React from 'react';
import {Map, CircleMarker, Popup, TileLayer} from 'react-leaflet';
import './MyMap.css'

const position = [51.505, -0.09];

const MyMap = (props) => (
  <Map center={position} zoom={13} id='map' className='z-0'>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/> 
      
      {props.data.map((marker) => {
        return (
          <CircleMarker key={marker._id} center={marker.geo.coordinates} radius={3}>
            <Popup>
              <span>
                {marker.text}</span>
            </Popup>
          </CircleMarker>
        )
      })}

  </Map>
);

export default MyMap;