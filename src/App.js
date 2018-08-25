import React, { Component } from 'react';
import { Header, Footer } from './Components/Layouts';
import Main from './Components/Contents/Main';
import Test from './Components/Contents/Test';


import './App.css';

class App extends Component {
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
