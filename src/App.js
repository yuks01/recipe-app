import 'react-app-polyfill/ie11';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './sass/style.scss';
import ScrollToTop from './components/ScrollToTop.js';
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import RecipePage from './components/pages/Recipe';
import AddRecipe from './components/pages/AddRecipe';
import axios from 'axios';
import queryString from 'query-string';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: {}
    }
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount(){
    this.getRecipes();
  }

  getRecipes = () => {
    axios.get('https://my-json-server.typicode.com/yuks01/demo/recipes')
    .then(response => this.setState({
      recipes: response.data
    }));
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Nav />
          <Switch>
              {/*<Route exact path="/" render={props => (
                <React.Fragment>
                  <Home recipes={this.state.recipes}/>
                </React.Fragment>
              )} />*/}
              <Route exact path="/" render={(props) => <Home {...props} recipes={this.state.recipes} />} />
              {/*<Route exact path="/recipes" render={props => (
                <React.Fragment>
                  <Recipes recipes={this.state.recipes}/>
                </React.Fragment>
              )} />*/}
              <Route exact path="/recipes" render={(props) => <Recipes {...props} recipes={this.state.recipes} />} />
              <Route exact path="/recipes/add" component={AddRecipe} />
              <Route exact path="/recipes/:id" render={(props) => <RecipePage {...props} recipes={this.state.recipes} />} />
              // <Route exact path="/recipes?name=:name" render={(props) => <Recipes {...props} recipes={this.state.recipes} />} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}