import React from 'react';
import { Router, Route } from 'react-router';

import Gallery from './components/gallery';
import App from './components/App';
import FourOFour from './components/four-o-four';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/gallery" component={Gallery} />
    <Route path="*" component={FourOFour} />
  </Router>
);

export default Routes;
