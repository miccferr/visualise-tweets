import React from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-pink" onClick={props.onZoom} coords={props.coordsToZoom}>{props.value}</li>;
}

function StoreList(props) { 
  const stores = props.data
    
  const listItems = stores.map((store) =>
    <ListItem key={store._id.toString()}
              value={store.text}
              coordsToZoom={store.geo.coordinates}
              onZoom={props.onZoom} />
  );
  return (
    <ul className="pa3 pa5-ns">{listItems}</ul>
  );
}

export default StoreList;