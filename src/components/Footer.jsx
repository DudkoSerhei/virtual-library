import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from './Main';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '15px 0',
    textAlign: 'center',
    background: theme.palette.colors.white,
    borderTop: `1px solid ${theme.palette.colors.divider}`,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Main>
        <p>{`© ${new Date().getFullYear()} Virtual Library corp.`}</p>
      </Main>
    </footer>
  );
};

export default Footer;
