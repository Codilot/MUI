import React, { Component } from 'react';
import { Header, Footer } from './Components/Layouts';
import Main from './Components/Contents/Main';
import { plants } from './store';

import './App.css';

class App extends Component {

  state = {
    plants
  }

  getPlantsByFamily() {
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

  render() {
    const plantsPerFamily = this.getPlantsByFamily();


    return (
      <div>
        <Header />
        <Main plantsPerFamily = {plantsPerFamily}/>
        <Footer />
      </div>
    );
  }
}

export default App;
