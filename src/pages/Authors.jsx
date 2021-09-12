import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles();

const AuthorsPage = () => {
  const classes = useStyles();

  return <div className={classes.container}>Authors Page</div>;
};

export default AuthorsPage;
