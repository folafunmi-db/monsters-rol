/*jshint esversion: 6*/
import React from 'react';
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
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
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
