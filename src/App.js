/*jshint esversion: 10*/

import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// class method
class App extends React.Component {
	constructor() {
		/* super() calls the constructor function on the component class
    and that gives access to 'this.state'
    
    'state' is a property that now exists on the class App and
    can be set to something

    class component also has access to lifecycle methods
    
    Also provides access to setState*/
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};

		//using the bind method you'd have to bind every method
		// this.handleChange = this.handleChange.bind(this);
	}

	// lifecycle method
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	/**arrow functions already get lexical scoping without 'bind' constructor, they
  set the context of 'this' to whatever initially declared it
  in this case that's the App component */
	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		// using destructuring
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="Search Monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
