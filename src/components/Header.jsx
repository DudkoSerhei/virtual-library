import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Logo, Main } from './index';
import { ROUTES } from '../constants';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0',
    background: theme.palette.colors.main,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
  },
  item: {
    marginRight: '20px',
    '&:last-child': {
      marginRight: 0,
    },
    '& .active': {
      color: theme.palette.colors.primary,
    },
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: theme.palette.colors.white,
    transition: '0.3s all ease',
    '&:hover': {
      color: theme.palette.colors.primary,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Main>
        <Logo className={classes.logo} />
        <nav className={classes.nav}>
          <li className={classes.item}>
            <NavLink exact to={ROUTES.ROOT} className={classes.link}>
              Main page
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to={ROUTES.BOOKS} className={classes.link}>
              Books
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to={ROUTES.AUTHORS} className={classes.link}>
              Authors
            </NavLink>
          </li>
        </nav>
      </Main>
    </header>
  );
};

export default Header;
