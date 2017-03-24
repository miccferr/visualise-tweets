import React from 'react';
import {Map, CircleMarker, Popup, TileLayer} from 'react-leaflet';
import './MyMap.css'
import supercluster from 'supercluster'
let index = supercluster({
    radius: 40,
    maxZoom: 16
});


const MyMap = (props) => (
  <Map center={props.center} zoom={13} id='map' className='z-0'>
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

      // {index.getClusters([-180, -85, 180, 85], 2)}
export default MyMap;



