import React from 'react';

const LocationFilterUSA = () => (
    <span className="ba dib ph4 pv3 mb4 br2 bg-red" filterCriteria={'USA'} onClick={this.removeNode}>Filter USA</span>
);



LocationFilters = (state, nodeId) => (
    <div>
        <span className="ba dib ph4 pv3 mb4 br2 bg-red" filterCriteria={'USA'} onClick={this.removeNode}>Filter USA</span>
        <span className="ba dib ph4 pv3 mb4 br2 bg-red" filterCriteria={'IT'}>Filter IT</span>
    </div>
);





function LocationFilterUSA(props) {
  // Correct! There is no need to specify the key here:
  return <span className="ba dib ph4 pv3 mb4 br2 bg-red" filterCriteria={'USA'} onClick={this.removeNode}>Filter USA</span>;
}
function LocationFilterItaly(props) {
  // Correct! There is no need to specify the key here:
  return <span className="ba dib ph4 pv3 mb4 br2 bg-red" filterCriteria={'USA'} onClick={this.removeNode}>Filter Italy</span>
}

function LocationFilters(props) { 
      
  const listItems = stores.map((store) =>
    <ListItem key={store.properties.loc_id.toString()}
              value={store.properties.business_name} />
  );
  return (
    <div>
        <LocationFilterUSA filterCriteria={'USA'} onClick={this.removeNode} Filter USA />
        <LocationFilterItaly filterCriteria={'IT'} Filter IT />
    </div>
  );
}

export default StoreList;