import React, {Fragment} from 'react';
import {
  AppBar, 
  Toolbar, 
  IconButton,
  Typography,
  }  from '@material-ui/core'

import {Menu as MenuIcon} from '@material-ui/icons'

import {
  makeStyles
  }  from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
}));

const Header = props => {
  const classes = useStyles();
  return (
    // <AppBar position="static">
    //     <Toolbar variant="dense">
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" color="inherit">
    //         Photos
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="overline" color="inherit">
          Workout Database
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header ;