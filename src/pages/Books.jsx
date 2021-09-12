import React from 'react';
import { makeStyles, Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Main, BooksTable } from '../components';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: '20px',
  },
  title: {
    color: theme.palette.colors.text,
    fontSize: '32px',
    marginBottom: '20px',
  },
  fab: {
    backgroundColor: theme.palette.colors.main,
    color: theme.palette.colors.white,
    position: 'fixed',
    bottom: '14%',
    right: '3%',
    transition: '0.3s all ease',
    '&:hover': {
      backgroundColor: theme.palette.colors.main,
      color: theme.palette.colors.primary,
    },
  },
}));

const BooksPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Main>
        <h1 className={classes.title}>Books list</h1>
        <BooksTable />
        <Tooltip title="Add book">
          <Fab className={classes.fab}>
            <Add />
          </Fab>
        </Tooltip>
      </Main>
    </div>
  );
};

export default BooksPage;
