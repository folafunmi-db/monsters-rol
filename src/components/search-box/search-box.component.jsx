/*jshint esversion: 10 */

import React from "react";

import "./search-box.styles.css";

// functional component - simply gets props and returns HTML
export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
