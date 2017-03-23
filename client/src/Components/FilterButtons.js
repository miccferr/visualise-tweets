import React, {Component} from 'react';




// const FilterButtonSubMenuLoc = (props) => {    
    
//     // const FilterButtonTypes = ['country', 'zip', 'state_province'];        
//     const FilterButtonTypes = [
//             {filterType: 'country',
//             content: 'Country',
//             index:1},
//             {filterType: 'zip' ,
//             content: 'Zip',
//             index:2},
//             {filterType: 'state_province',
//             content: 'Province' ,
//             index:3}
//         ];
    
//     const SubMenuItem = []; 
    
//     const FilterButtonItem = (props) => (                
//         <div
//             className="fl w-third bt bb tc mw7 center mt4 bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" >{props.content}
//         </div>    
//     ); 

//     FilterButtonTypes.map((type,index) => {
        
//         SubMenuItem.push(
//             <FilterButtonItem 
//                     key={index} 
//                      onClick={console.log(props)}                   
//                     content={type.content}
//                     filterType={type.filterType}/>
//         )}
//     );
    
//     return  <div >
//             <div
//             className="fl w-third bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
//             onClick={props.handleFilterType} type={'country'}>Country</div>
        
//                 {SubMenuItem}
//             </div>
// };


const FilterButtonSubMenuLoc = (props) => {
    

    return <div className='w-100 mb6 avenir black-80 f5-l'>
        <div
            className="fl w-third bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={ props.handleFilterType } value={"adsds"}>Country</div>
        <div
            className="fl w-third bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            onClick={props.handleFilterType} value={'zip'}>Zip</div>
        <div
            className="fl w-third bt bb tc mw7 center mt4 bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
            onClick={props.handleFilterType} value={'state_province'}>Province</div>
    </div>
};
    
const FilterButtonSubMenuType = (props)=>{   

    return <div className='w-100 mb6 avenir black-80 f5-l'>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>Headquarter</div>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>Distributor</div>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>Retail</div>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>Factory Outlet</div>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>Factory Store</div>
        <div
            className="fl w-20 bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            onClick={props.removeNode}>e-Commerce and Store</div>
    </div>

};
    

const FirstLevel = (props) => {  
              return <nav>
                    <div
                        className="fl w-third bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                        onClick={props.toggleSubmenuLoc}>Location</div>
                    <div
                        className="fl w-third bt bb tc mw7 center mt4  bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" 
                        onClick={props.toggleSubmenuType}>Type</div>
                    <div
                        className="fl w-third bt bb tc mw7 center mt4 bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
                        onClick={props.resetNodes}>Reset</div>                      
                </nav>
}

const FilterButtonsMenu = (props) => {
       return (
            <div>
                <div className='w-100 mb6 avenir black-80 f5-l'>                
                    <FirstLevel {...props}/>                 
                </div>
                <div className='w-100 mb6 avenir black-80 f5-l'>
                    {props.isTypeSubMenuOpen ? <FilterButtonSubMenuType {...props}/> : null }               
                    {props.isLocSubMenuOpen ? <FilterButtonSubMenuLoc {...props}/> : null }               
                </div>
            </div>
        )
 
};

export default FilterButtonsMenu;





// const FilterButtonSubMenuConstructor = (props) => {

//     if (props.FilterButtonSubMenuType == 'location') {
//         return FilterButtonSubMenuLoc

//     } else if (props.FilterButtonSubMenuType == 'reseller') {
//         return FilterButtonSubMenuRes
//     } else {
//         return
//     }
// };


// const FilterButtonSubMenu = null; 

// const createSubMenu = (props)=>{
    
// //     // props.handleFilterType();
// //     if (props.FilterButtonSubMenuType == 'location') {
// //     // FilterButtonSubMenu = FilterButtonSubMenuLoc
// //     return a

// // } else if (props.FilterButtonSubMenuType == 'reseller') {
// //     // FilterButtonSubMenu = FilterButtonSubMenuRes; 
// //     return b
// // } else {
// //     return
// // }
// };


// SEE THIS http://stackoverflow.com/a/33117414

{/*{FilterButtonsList}*/}                
                {/*<FilterButtonsList 
                    onClick={createSubMenu}
                    handleFilterType ={props.handleFilterType} />*/}
                {/*{FilterButtonSubMenu}*/}



// {filterType: 'country',
        // color: 'blu',
        // id:1},
        // {filterType: 'zip' ,
        // color: 'green',
        // id:2},
        // {filterType: 'state_province',
        // color: 'yellow' ,
        // id:3}];