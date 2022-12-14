import React from "react";  
import {getSearchCoords} from '../../state/state'

export default function LocationSearch (props) {
    let citySearchValue = React.createRef();
    return (
         <div className="locationSearch">
            <div className="locationSearch__container">
                <input ref = {citySearchValue} type="text" placeholder={props.state} className="citySearchField"/>
                <div className="locationSearch__button" onClick={()=>{
                    let valueToCheck = citySearchValue.current.value;
                    getSearchCoords(valueToCheck);
                    console.log('pushed')
                    }}>{'>>'}</div>    
            </div>   
         </div>
    )
}