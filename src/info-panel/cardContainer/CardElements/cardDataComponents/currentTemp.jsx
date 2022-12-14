import React from "react";
import AdditionalInfoButton from "./additionalInfoButton";

export default function CurrentTemp (props) {

    

    

    if (props.cardType === 'current'){
        return (
            <div className="currentDataContainer__temp">{Math.round(props.state.temp-273)}&deg;</div>
        )
    } else if (props.cardType === 'hourly'){
        return (
            <div className="shortCardInfo__data temp__button_parent">
                <div className="smallFontSize__temp">{Math.round(props.state.temp-273)}&deg;</div>
                <AdditionalInfoButton cardHeigthExtend = {props.cardHeigthExtend}/>
            </div>
        )
    } else {
        let dayTemp = Math.round(props.state.temp.day-273);
        let nightTemp = Math.round(props.state.temp.night-273);
        /* let stringToPrint = `${dayTemp}&deg;/${nightTemp}&deg;` */
        return (
            <div className="shortCardInfo__data temp__button_parent">
                <div className="smallFontSize__temp">{dayTemp}&deg; / {nightTemp} &deg;</div>    
                <AdditionalInfoButton cardHeigthExtend = {props.cardHeigthExtend}/>
            </div>
        )
    }

}