import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent'

import MyHeader from './MyHeader';
import MyMap from './MyMap';
import StoreList from './StoreList';



// className="sideBarContainer"
function MySidebar(props) {
    
    const sidebarContent = <SidebarContent {...props}/>
    
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
        <Sidebar {...sidebarProps}>
            <MyHeader menuButtonClick={props.menuButtonClick}/>
            <div className="fl w-100 ph4">
                <div className="fl w-25 StoreListContainer">
                    {/*<locationFilters data={this.state} removeNode={this.handleNodeRemoval}/>*/}                    
                    <StoreList data={props.data} removeNode={props.removeNode}/>
                </div>
                <div className="fl w-75 bg-dark-pink">
                    <MyMap data={props.data} />
                </div>
            </div>            
        </Sidebar>
    );
};

export default MySidebar;