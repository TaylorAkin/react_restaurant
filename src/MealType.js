import React from 'react';
import { insideStyles } from './insideStyles';




function MealType(props) {
    return (
    <button className = "btn btn-link" style={insideStyles}>{props.name}</button>
    )
}


export default MealType;