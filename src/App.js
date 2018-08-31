import React, { Component } from 'react';
import { Header, Footer } from './Components/Layouts';
import Main from './Components/Contents/Main';
import Test from './Components/Contents/Test';
import { plants } from './store';

import './App.css';

class App extends Component {

  state = {
    plants
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Test />
        <Footer />
      </div>
    );
  }
}

export default App;
