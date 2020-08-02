/*jshint esversion: 10*/
import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    /* super() calls the constructor function on the component class
    and that gives access to 'this.state'
    
    'state' is a property that now exists on the class App and 
    can be set to something
    
    Also provides access to setState*/
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    // using destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
      <input 
        type="search" 
        placeholder="Search Monsters" 
        onChange={e => this.setState({ searchField: e.target.value })} />
      <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
