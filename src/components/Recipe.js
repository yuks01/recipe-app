import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Recipe extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.recipe);
		return (
			<NavLink exact={true} activeClassName="active" to={`/recipes/${this.props.recipe.id}`}>
			<div id={this.props.recipe.id} className="recipe">
				<div className="img-cont" style={this.imgContStyle}>
				</div>
				<div className="text-cont">
					<h4>{this.props.recipe.name}</h4>
				</div>
			</div>
			</NavLink>
		);
	}

	imgContStyle={
		backgroundImage: `url(${this.props.recipe.img})`
	}
}
