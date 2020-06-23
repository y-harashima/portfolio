import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuBlock from './MenuBlock';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#333',
        background: '#FFF',
        padding: '.3em .6em .3em .6em',
        boxShadow: 'none',
        // borderBottom: '1px solid #999'
    },
    wrapper: {
      justifyContent: 'space-between',
      margin: '.2em 0 .2em'
    },
    title: {
      letterSpacing: '.15em',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        height: '7px',
        width: '100%',
        background: 'rgba(128, 255, 128, 0.4)',
        bottom: '3px',
        left: '0',
      },
    },
    menuList: {
      display: 'flex',
      height: '100%',
      background: '#333'
    }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return(
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.wrapper}>
        <Typography variant="h4" className={classes.title}>
          Hara-c's Web!
        </Typography>
        <div className={classes.menuList}>
          <MenuBlock menuName='HOME' />
          <MenuBlock menuName='BLOG' />
          <MenuBlock menuName='PROFILE' />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;