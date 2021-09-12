import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles();

const BooksPage = () => {
  const classes = useStyles();

  return <div className={classes.container}>Books Page</div>;
};

export default BooksPage;
