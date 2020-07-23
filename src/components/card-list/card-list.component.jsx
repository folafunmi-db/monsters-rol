/*jshint esversion: 10*/

import React from 'react';
import { Card } from '../card/card.component';
import "./card-list.styles.css";

/* Card list component is just responsible for rendering the cards it is
not responsible for how they look. That is, this component just adds and 
lists the cards*/
export const CardList = props => (
    <div className='card-list'>
        <h1> { props.monsters.map(monster => (
            <Card key={ monster.id } monster={ monster }/>
        ))} 
        </h1>
    </div>
  );
