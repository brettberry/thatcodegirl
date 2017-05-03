import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';

export default function RouteProvider() {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={App}/>
        </Route>
    </Router>
  );
}
