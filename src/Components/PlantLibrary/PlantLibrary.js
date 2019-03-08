import React, { Component } from 'react';

import { Footer } from './Layout';
import Main from './Content/Main';
import { plants } from './../../store';



class PlantLibrary extends Component {

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

export default PlantLibrary;
