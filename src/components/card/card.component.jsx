/*jshint esversion: 10 */

import React from "react";
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <h1> { props.monsters.name} </h1>
    </div>
);