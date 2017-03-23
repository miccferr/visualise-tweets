import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent'

import MyHeader from './MyHeader';
import MyMap from './MyMap';
import StoreList from './StoreList';



// className="sideBarContainer"
function MySidebar(props) {
    
const sidebarContent = <SidebarContent {...props} />


const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 9999,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    backgroundColor: "white"
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'auto',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
}

    const sidebarProps = {
        sidebar:sidebarContent,
        open: props.sidebarOpen,
        onSetOpen: props.onSetOpen,
        data:props.data,
        removeNode:props.removeNode,
        menuButtonClick:props.menuButtonClick,
        pullRight: true
    };

    return (
        <Sidebar {...sidebarProps} styles={styles} className="bg-silver" >
            <MyHeader menuButtonClick={props.menuButtonClick}/>
            <div className="fl w-100 ph4" >
                <div className="fl w-25 StoreListContainer" >
                    {/*<locationFilters data={this.state} removeNode={this.handleNodeRemoval}/>*/}                    
                    <StoreList data={props.data} removeNode={props.removeNode} onZoom={props.onZoom}/>
                </div>
                <div className="fl w-75 bg-dark-pink">
                    <MyMap data={props.data} center={props.center}/>
                </div>
            </div>            
        </Sidebar>
        
        
        
        
    );
};

export default MySidebar;