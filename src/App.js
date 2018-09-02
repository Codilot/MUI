import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './Components/Layouts';
import Main from './Components/Contents/Main';
import { plants } from './store';

import './App.css';

class App extends Component {

  state = {
    plants,
    catValue : "", 
    category: 0,
    plant: {}
  }

  getPlantsByFamily = () => {
    return Object.entries(
      this.state.plants.reduce((acc, obj) => {
        const key = obj.family;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {})
    );
  }

  handleCategorySelected = (event, category) => {
    this.setState(
      { category }
    );
    this.setState(
      { catValue: event.target.textContent }
    );
  };

  handlePlantSelected = (id) => {
    this.setState((prevState) => ({
      plant: prevState.plants.find(plant => plant.id === id)
    }));
  }

  
  render() {
    const plantsPerFamily = this.getPlantsByFamily();
       return (
        <React.Fragment>
          <CssBaseline />
          <Header />
          <Main 
            plantsPerFamily = {plantsPerFamily}
            catValue={this.state.catValue}
            plant={this.state.plant}
            onSelect={this.handlePlantSelected}  
            />
          <Footer 
            onSelect={this.handleCategorySelected}
            category={this.state.category}
            />
        </React.Fragment>
    );
  }
}

export default App;
