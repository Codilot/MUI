import React, { Component } from 'react';
import { Header, Footer } from './Components/Layouts';
import Main from './Components/Contents/Main';
import { plants } from './store';

import './App.css';

class App extends Component {

  state = {
    plants,
    category: 0
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
    this.setState({ category });
    console.log("category");
  };

 


  render() {
    const plantsPerFamily = this.getPlantsByFamily();
      return (
      <div>
        <Header />
        <Main plantsPerFamily = {plantsPerFamily}/>
        <Footer 
          onSelect={this.handleCategorySelected}
          category={this.state.category}
          />
      </div>
    );
  }
}

export default App;
