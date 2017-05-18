import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ArticleTemplate from './pages/ArticleTemplate';
import Home from './pages/Home';

export default function RouteProvider() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="articles/:articleName" component={ArticleTemplate}/>
    </Router>
  );
}
