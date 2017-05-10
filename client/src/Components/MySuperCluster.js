import React, {Component} from 'react';
import {TileLayer, GeoJSON, Marker} from 'react-leaflet';
import supercluster from 'supercluster';








class MySuperCluster extends Component{     
// createClusterIcon(feature, latlng) {
//     if (!feature.properties.cluster) return Marker(latlng);

//     var count = feature.properties.point_count;
//     var size =
//         count < 100 ? 'small' :
//         count < 1000 ? 'medium' : 'large';
//     var icon = L.divIcon({
//         html: '<div><span>' + feature.properties.point_count_abbreviated + '</span></div>',
//         className: 'marker-cluster marker-cluster-' + size,
//         iconSize: L.point(40, 40)
//     });
//     return Marker(latlng, {icon: icon});
// }


// computeClusters(){
//     if (this.props.bounds==undefined){ 
//     console.log('STATE');    
//     console.log(this.props);    
//     return this.props.data 
//   }else{
//   // get data from parent
//   index.load(this.props.data.features);
//   // what is the new BBOX?
//   let SW = this.props.bounds._southWest
//   let NE= this.props.bounds._northEast
//   let boundaries = [SW.lng, SW.lat, NE.lng, NE.lat]
//   // For the given bbox array ([westLng, southLat, eastLng, northLat]) and integer zoom, 
//   // returns an array of clusters and points as GeoJSON.Feature objects.
//   let clusters = index.getClusters(boundaries, this.props.zoom);
//   console.log('DATA', clusters.length);
//   return clusters
//   }
// }

// componentWillReceiveProps(){
//   cl = this.computeClusters() 
// }

render (){   

  console.log('sss',this.props.data);
   
  // console.log('CL', JSON.stringify(this.props.data));
  
  return(
    <GeoJSON
      data={this.props.data}
    
      />
      
  )
}
}

export default MySuperCluster;