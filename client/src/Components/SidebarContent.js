import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import FilterButtonsMenu from './FilterButtons.js';
import SuggestWidget from './SuggestWidget.js'
// import Example from './autoexample.js'

    
    const styles = {
    sidebar: {
        width: 256,
        backgroundColor: "lavender",
        
    },
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none'
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575'
    },
    content: {
        padding: '16px',
        backgroundColor: 'white'
    }
};





function SidebarContent(props) {    

    return (
        
        <div style={styles.content}>                
             <SuggestWidget suggestions={props.data} onFilter={props.onFilter} />
            {/*<Example suggestions={props.data.features}/>*/}
        </div>
        
        
    )
};

export default SidebarContent;