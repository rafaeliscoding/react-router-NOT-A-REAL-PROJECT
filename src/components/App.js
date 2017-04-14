import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Gallery from './gallery.js'
import FourOFour from './four-o-four.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        Postcard exchange!!!!
        <Router>
          <div>
           <Route path="/gallery" component={Gallery}/>
           <Route path="*" component={FourOFour} />
         </div>
        </Router>
      </div>
    );
  }
}

export default App;
