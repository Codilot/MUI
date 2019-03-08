import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import PlantLibrary from './Components/PlantLibrary/PlantLibrary';
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';



class App extends Component {

  render() {
       return (
        <Router>
          <React.Fragment>
            <CssBaseline />
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/plant-library/">Plant Library</Link>
                  </li>
                  <li>
                    <Link to="/infinite-scroll/">Infinite Scroll</Link>
                  </li>
                </ul>
              </nav>
            
             <Route path="/" exact component={InfiniteScroll} />
             <Route path="/plant-library/" component={PlantLibrary} />
             <Route path="/infinite-scroll/" component={InfiniteScroll} />
             </div>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
