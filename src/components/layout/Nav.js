import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="nav-cont">
				<nav>
					<ul>
			            <li>
				            <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
			            </li>
			            <li>
			            	<NavLink exact={true} activeClassName="active" to="/recipes">Recipes</NavLink>
		            	</li>
			            <li>
				            <NavLink exact={true} activeClassName="active" to="/recipes/add">Add Recipe</NavLink>
			           </li>
		           </ul>
		        </nav>
	        </header>
		);
	}
}
