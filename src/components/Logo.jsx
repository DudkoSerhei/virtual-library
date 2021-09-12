import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ROUTES } from '../constants';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: '18px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: theme.palette.colors.white,
    transition: '0.3s all ease',
    '&:hover': {
      color: theme.palette.colors.primary,
    },
  },
}));

const Logo = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <Link to={ROUTES.ROOT} className={cn(classes.link, className)}>
      Library
    </Link>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
