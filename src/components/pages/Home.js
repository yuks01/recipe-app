import React from 'react';
import Recipe from "../Recipe";
import heroImg from "../../img/home/hero-img.svg";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value});
	
	render() {
		
		return (
			<main className="home">
				<section className="hero-cont">
					<div className="container">
						<div className="row">
							<div className="left-cont">
								<h1 className="">Hassle free recipes</h1>
								<p>Recipes that lorem ipsum hat eak auw ashfnsd wqifpq asdw fksjf wfcv aklq aiwj jsjf fjs</p>
								<input name="name" type="text" placeholder="Search a recipe" onChange={this.onChange} value={this.state.name} ref={(input) => {this.input =  input}}/>
								<Link exact={true} to={{pathname: '/recipes', searchProps: {search: this.state.name}}}>Search</Link>
							</div>
							<div className="right-cont">
								<img className="hero-graphic" src={heroImg}/>
							</div>
						</div>
					</div>
				</section>
				<section className="recipe-list-cont">
					<div className="container">
						<h2>Recipes</h2>
						<div className="recipes-outer">
							<div className="recipes-cont">
								{this.props.recipes.map((recipe) => (
									<Recipe key={recipe.id} recipe={recipe} />
								))}
							</div>
						</div>
					</div>
				</section>
				<section className="cta-cont">
					<div className="container">
						<h4>Contribute By Adding Recipes</h4>
						<a href="">Go</a>
					</div>
				</section>
			</main>
		);
	}
}

