import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles();

const HomePage = () => {
  const classes = useStyles();

  return <div className={classes.container}>Home Page</div>;
};

export default HomePage;
