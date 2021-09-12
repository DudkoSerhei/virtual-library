import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, BooksPage, AuthorsPage } from '../pages';
import { ROUTES } from '../constants';

const Router = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={HomePage} />
    <Route path={ROUTES.BOOKS} component={BooksPage} />
    <Route path={ROUTES.AUTHORS} component={AuthorsPage} />
  </Switch>
);

export default Router;
