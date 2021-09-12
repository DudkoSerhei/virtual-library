import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Main } from '../components';
import { ROUTES } from '../constants';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: 'calc(100vh - 110px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '300px',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textDecoration: 'none',
    marginRight: '90px',
    transition: '0.3s all ease',
    color: theme.palette.colors.text,
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      transform: 'scale(1.2)',
      color: theme.palette.colors.primary,
    },
  },
  books: {
    backgroundImage: 'url(/virtual-library/images/books.svg)',
  },
  authors: {
    backgroundImage: 'url(/virtual-library/images/author.svg)',
  },
  label: {
    fontSize: '22px',
    transform: 'translateY(40px)',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Main>
        <Link className={cn(classes.books, classes.link)} to={ROUTES.BOOKS}>
          <p className={classes.label}>Books</p>
        </Link>
        <Link className={cn(classes.authors, classes.link)} to={ROUTES.AUTHORS}>
          <p className={classes.label}>Authors</p>
        </Link>
      </Main>
    </div>
  );
};

export default HomePage;
