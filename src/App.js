import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { Header } from './Components/AppLayout'

import PlantLibrary from './Components/PlantLibrary/PlantLibrary'
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll'

const theme = createMuiTheme()

class App extends Component {

  render() {
       return (
        <Router>
           <MuiThemeProvider theme={theme}>
         
            <CssBaseline />
            <Header />
            <Route path="/" exact component={InfiniteScroll} />
            <Route path="/plant-library/" component={PlantLibrary} />
            <Route path="/infinite-scroll/" component={InfiniteScroll} />
         
          </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;
