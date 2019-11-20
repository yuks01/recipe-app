import React from 'react';
import Recipe from "../Recipe";
import queryString from 'query-string';
import PropTypes from 'prop-types';

export default class Recipes extends React.Component {
	static propTypes = {
		recipes: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired
			})
		).isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			searchedRecipe: [],
			search: ""
		}
		// this.searchRecipe = this.searchRecipe.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		this.searchRecipe();
	}

	componentDidUpdate(prevProps){
		console.log(this.state.searchedRecipe.length);
		if(this.props.recipes.length > 0 && this.state.searchedRecipe.length <= 0){
			console.log(this.props.recipes);

			this.searchRecipe();
		}
	}
	onChange = (e) => this.setState({[e.target.name]: e.target.value});
	searchRecipe = () => {
		// const recipeName = queryString.parse(window.location.search).name;
		const recipeName = this.state.search;
		console.log(recipeName);
		// console.log(recipeName.toLowerCase());
		console.log(this.props.recipes);
		console.log(this.state.searchedRecipe);
		if(recipeName == ""){
			this.setState({
				searchedRecipe: this.props.recipes
			})
		} else {
			this.setState({
				searchedRecipe: this.props.recipes.filter((recipe) => recipe.name.toLowerCase() === recipeName.toLowerCase())
			})
		}
	}

	render() {
		const parsed = queryString.parse(window.location.search).name;
		console.log(parsed);
		console.log(this.state.searchedRecipe);
		return (
			<main className="recipes">
				<section className="recipe-list-cont">
					<div className="container">
						<h2>Recipes</h2>
						<input name="search" type="text" placeholder="Search a recipe" onChange={this.onChange} value={this.state.name} ref={(input) => {this.input =  input}}/>
						<div className="recipes-outer">
							<div className="recipes-cont">
								{this.state.searchedRecipe.map((recipe) => (
									<Recipe recipe={recipe} />
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
