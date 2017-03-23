import React, {Component} from 'react';
import './App.css';
import data from '../../public/data.json';
import MySidebar from './MySidebar';
import request from 'request-promise';


// import LocationFilters from './LocationFilter'

const numbers = [1, 2, 3, 4, 5];

function $set(...objects) {
  return Object.assign({}, ...objects);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mapCenter : [51.505, -0.09],
      sidebarOpen: false,
      pullRight: true,
      isLocSubMenuOpen: false,
      isTypeSubMenuOpen: false,
      
    };
  }
  componentDidMount (prevProps, prevState) {
    request('http://localhost:3000/mapjson')      
      .then(data =>{ this.setState({data: JSON.parse(data)}) })                    
  }
  
  handleFilter = (e)=>{    
    e.preventDefault();  
    console.log(e.target.value);
    this.setState({data: e.target.value});
    // console.log(this.state.subMenuToRender);
  }

  handleFilterType = (e)=>{    
    e.preventDefault();  
    console.log(e.target.value);
    this.setState({subMenuToRender: e.target.value});
    console.log(this.state.subMenuToRender);
  }

  // set sidebar state
  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }

  // toggle sidebar button
  menuButtonClick = (e) => {
    e.preventDefault();    
    this.onSetSidebarOpen(!this.state.sidebarOpen);
  };

  // toggle lcoation filters submenu
  toggleSubmenuLoc = () => {
    console.log(this.state.isLocSubMenuOpen);    
    this.setState({isLocSubMenuOpen : !this.state.isLocSubMenuOpen});    
  };
  
  //toggle type filters submenu
  toggleSubmenuType = () => {
    console.log(this.state.isLocSubMenuOpen);    
    this.setState({isTypeSubMenuOpen : !this.state.isTypeSubMenuOpen});    
  };

  // TODO: momentarily filtering only on countries to implement a generic
  // abstractoin that filters everything
  handleNodeRemoval = () => {
    console.log(this.state);
    let filterCriteria  = 'USA';           
    const features = this.state.data.features.filter((store) => store.properties.country != filterCriteria)    
    this.setState({ data: { ...this.state.data, features } })
  };

  handleNodesReset = () => {
    this.setState(this.state);
  };

  handleZoom = (e) => {
    e.preventDefault();    
    let coordsToCast =e.target.getAttribute('coords').split(",")
    let coords = [parseFloat(coordsToCast[0]), parseFloat(coordsToCast[1])]
    console.log(coords);    
    this.setState({mapCenter: coords})
  }

  render() {
const sidebar = {
        width: 2569,
        backgroundColor: "red",
        position: "relative"
        
    }
    return (
      <div className="App">
        <MySidebar           
          data={this.state.data}
          center={this.state.mapCenter}
          sidebarOpen={this.state.sidebarOpen}          
          isLocSubMenuOpen= {this.state.isLocSubMenuOpen}          
          isTypeSubMenuOpen = {this.state.isTypeSubMenuOpen}
          handleFilterType={this.handleFilterType}          
          toggleSubmenuLoc= {this.toggleSubmenuLoc}     
          toggleSubmenuType= {this.toggleSubmenuType}     
          onSetOpen={this.onSetSidebarOpen}
          removeNode={this.handleNodeRemoval}
          resetNodes={this.handleNodesReset}
          menuButtonClick={this.menuButtonClick}
          handleFilter={this.handleFilter}
          onZoom= {this.handleZoom}
          
          
          />
      </div>
    );
  }
}

export default App;
