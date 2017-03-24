import React from 'react';
import {Map, CircleMarker, Popup, TileLayer} from 'react-leaflet';
import './MyMap.css'


const myUrl = "http://api.tiles.mapbox.com/v4/<mapid>/{z}/{x}/{y}.png?access_token=" + process.env.MAPBOX_ACCESS_TOKEN
const MyMap = (props) => (
  <Map center={props.center} zoom={13} id='map' className='z-0'>
    <TileLayer
      url= {myUrl}
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




