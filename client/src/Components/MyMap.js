import React, {Component} from 'react';
import {Map, CircleMarker, Popup, TileLayer, GeoJSON} from 'react-leaflet';
import './MyMap.css'
import MySuperCluster from './MySuperCluster.js'

import supercluster from 'supercluster';
// const index = supercluster({    radius: 40,    maxZoom: 16});                    
let cl,clusters = [];







// const MyMap = (props) => (
//   <Map center={props.center} zoom={13} id='map' className='z-0'>
//    <Cicci data={d} />
        
         
         
          
                  

          
        
        
//       {/*console.log("asdasda")}*/}

//       {/*{props.data.map((marker) => {
//         return (
//           <CircleMarker key={marker._id} center={marker.geo.coordinates} radius={3}>
//             <Popup>
//               <span>
//                 {marker.text}</span>
//             </Popup>            
//           </CircleMarker>
//         )
//       })}*/}

//   </Map>
  
        

// );

      // {index.getClusters([-180, -85, 180, 85], 2)}


const d = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.13097763061523438,
          51.49506473014368
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.092010498046875,
          51.51654120027656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.08892059326171875,
          51.48801054716568
        ]
      }
    }
  ]
}

const index = supercluster({    radius: 40,    maxZoom: 16});                    

class MyMap extends Component {
  constructor(props) {
    super();
    this.state = {
      bounds:null,
      zoom:null,
      data: d,
      clusters: null
    }    
  }

  componentDidMount() {    
    this.setState({
      bounds: this.refs.map.leafletElement.getBounds(),
      zoom:this.refs.map.leafletElement.getZoom()
    })
  }

  handleDrag(e){    
    // const features = this.state.data.features.filter((store) => store.properties.country != filterCriteria)    
    // const features = this.state.data.features.filter((store) => store.properties.country != filterCriteria)    
    // this.setState({ data: { ...this.state.data, features } })   
    this.setState({
      bounds: e.target.getBounds(),
      zoom:e.target.getZoom()    
    })
    
  }

  computeClusters(){
  // get data from parent
  index.load(this.state.data.features);
  if (this.state.bounds==null){ 
    console.log('STATE');    
    return this.state.data 
  }else{
    // what is the new BBOX?
  let SW = this.state.bounds._southWest
  let NE= this.state.bounds._northEast
  let boundaries = [SW.lng, SW.lat, NE.lng, NE.lat]
  // For the given bbox array ([westLng, southLat, eastLng, northLat]) and integer zoom, 
  // returns an array of clusters and points as GeoJSON.Feature objects.
  clusters = index.getClusters(boundaries, this.state.zoom);
  console.log('CLUSTER');  
  return clusters
  }  
}

// componentWillReceiveProps(){
//   console.log('RENDERING');
  
//   this.setState({data: this.computeClusters() })
// }


  render() {
    console.log('DATA', this.state.cluster);
    console.log('DATA', this.state.cluster);
    
    return (
      <Map center={this.props.center} 
           zoom={13}
           ref='map'
           id='map'
           className='z-0'
           onDragEnd={this.handleDrag.bind(this)}
           onZoomEnd={this.handleDrag.bind(this)}
           >

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {/*<MySuperCluster zoom={this.state.zoom} bounds={this.state.bounds} data={this.state.data}/>*/}
        <MySuperCluster zoom={this.state.zoom} bounds={this.state.bounds} data={this.state.cluster==null ?  this.state.data : this.state.clusters}/>
      </Map>
    );
  }
}

export default MyMap;