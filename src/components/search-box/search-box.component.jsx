/*jshint esversion: 10 */

import React from 'react';

import './search-box.styles.css';

// functional component - simply gets props and returns HTML 
const SearchBox = ({ placeholder }) => (
    <input 
        className='search'
        type="search" 
        placeholder={placeholder} 
        onChange={e => this.setState({ searchField: e.target.value })} />
);