/*jshint esversion: 10*/

import React from 'react';
import "./card-list.styles.css";

/* Card list component is just responsible for rendering the cards it is
not responsible for how they look. That is, this component just lists the
cards*/
export const CardList = props => (
    <div className='card-list'>
            { props.monsters.map(monster => (
        <h1 key={ monster.id }> { monster.name } </h1>
        ))}
    </div>
  );
