import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import FilterButtonsMenu from './FilterButtons.js';
import SuggestWidget from './SuggestWidget.js'

function SidebarContent(props) {    
    
const content ={
    padding: 16,
    backgroundColor: "white"
  }
    return (
        <div style={content}>            
             <SuggestWidget suggestions={props.data} onZoom={props.handleZoom}/>
             
        </div>
    )
};

export default SidebarContent;