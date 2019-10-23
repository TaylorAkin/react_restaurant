import React from 'react';
import { insideStyles } from './insideStyles';
import ConditionalButton from './ConditionalButton';



function MealType(props) {
    return (
    <button className = "btn btn-link" style={insideStyles}>{props.name}</button>
    )
}


export default MealType;