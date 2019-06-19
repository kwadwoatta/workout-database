import React from 'react';
import {
  AppBar, 
  Toolbar, 
  // IconButton,
  Typography,
  }  from '@material-ui/core'

import CreateDialogIcon from '../Exercises/Dialog'

import { makeStyles }  from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
}));

const Header = ({muscles, onCreateExercise}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="overline" color="inherit" style={{flexGrow: 1}}>
          Workout Database
        </Typography>
        <CreateDialogIcon 
          muscles={muscles}
          onCreate={onCreateExercise}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header ;