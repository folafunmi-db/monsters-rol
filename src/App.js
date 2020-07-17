/*jshint esversion: 6*/
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    /* super() calls the constructor function on the component class
    and that gives access to 'this.state'

    'state' is a property that now exists on the class App and 
    can be set to something
    
    Also provides access to setState*/
    super();
    
    this.state = {
      monsters: [
        {name: "Frankenstein",
         id: '1'},
        {name: "Dracula",
         id: '2'},
        {name: "Zombie",
         id: '3'}
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));
  }

  render() {
    return(
      <div className="App">
        { this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}


export default App;
