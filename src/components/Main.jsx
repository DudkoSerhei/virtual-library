import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles({
  main: {
    width: '80%',
    margin: '0 auto',
    display: 'inherit',
    flexDirection: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
  },
});

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();

  return <div className={classes.main}>{children}</div>;
};

Main.propTypes = propTypes;

export default Main;
