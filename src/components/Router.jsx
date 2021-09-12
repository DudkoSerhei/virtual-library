import React from 'react';
import { Switch } from 'react-router-dom';
import Page from './Page';
import { HomePage, BooksPage, AuthorsPage } from '../pages';
import { ROUTES } from '../constants';

const Router = () => (
  <Switch>
    <Page exact path={ROUTES.ROOT} component={HomePage} />
    <Page path={ROUTES.BOOKS} component={BooksPage} />
    <Page path={ROUTES.AUTHORS} component={AuthorsPage} />
  </Switch>
);

export default Router;
