import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Header, Footer } from './index';

const propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool,
};

const defaultProps = {
  exact: false,
};

const useStyles = makeStyles({
  main: {
    minHeight: 'calc(100vh - 110px)',
  },
});

const Page = (props) => {
  const { path, component, exact } = props;
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Route path={path} component={component} exact={exact} />
      </main>
      <Footer />
    </>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
