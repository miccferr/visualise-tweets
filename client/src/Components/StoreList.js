import React from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-pink">{props.value}</li>;
}

function StoreList(props) { 
  const stores = props.data
    
  const listItems = stores.map((store) =>
    <ListItem key={store.properties.loc_id.toString()}
              value={store.properties.business_name} />
  );
  return (
    <ul className="pa3 pa5-ns">{listItems}</ul>
  );
}

export default StoreList;