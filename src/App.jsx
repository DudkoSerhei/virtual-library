import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageRouter from './components/Router';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <PageRouter />
  </Router>
);

export default App;
