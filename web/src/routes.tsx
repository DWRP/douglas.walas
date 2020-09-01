import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home'
import Services from './pages/Services'

function Routes() {
  return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services} />
        </Switch>
  );
}

export default Routes;
