/*jshint esversion: 10 */

import React from "react";

export const Card = props => (
    <div className='card-list'>
        <h1> { props.monsters.map(monster => (
            <Card key={ monster.id } monster={ monster }/>
        )) } </h1>
    </div>
)