import React from 'react';

export default class Recipe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipe: {}
		}
		this.getRecipe = this.getRecipe.bind(this);
	}

	componentDidMount() {
		this.getRecipe(this.props.match.params.id);
	}

	componentDidUpdate(prevProps){
		console.log(this.props.recipes);
		console.log(this.props.match.params.id);
		console.log(this.state.recipe);
		// if(this.state.recipe == undefined){
			// if(this.props.match.params.id != this.state.recipe.id){
			// 	this.getRecipe(this.props.match.params.id);
			// }
			
			// test // rewrite this to optimize
			if(this.props.recipes.length > 0 && this.state.recipe == undefined){
				this.setState({
					recipe: this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)
				});
			}
		// }
	}

	getRecipe = (id) => {
		console.log(id);
		this.setState({
			recipe: this.props.recipes.find((recipe) => recipe.id == id)
		});
		console.log(this.props.recipes);
	}

	render() {
		const params = this.props.match.params;
		console.log(params);
		console.log(this.state);

		{/*find another way to change this*/}
		if(this.state.recipe != undefined && Object.keys(this.state.recipe).length > 0 ){
			return (
				<main className="recipe">
					<article id={this.state.recipe.id} className="recipe-outer-cont">
						<div className="img-cont" style={{backgroundImage: `url(${this.state.recipe.img})`}}>
						</div>
						<div className="container">
							<h1>{this.state.recipe.name}</h1>
							{/*Put description here*/}
							<p>{this.state.recipe.description}</p>
							<div className="steps-cont">
								<h2>Steps</h2>
								<ol>
									{
										this.state.recipe.steps.map((step, i) => (
											<li key={i}>
												{step.step}
												<p>{step.description}</p>
												<img src={step.img} />
											</li>
										))
									}
								</ol>
							</div>
						</div>
					</article>
				</main>
			);
		} else {
			return(
				<div></div>
			);
		}

	}
}
