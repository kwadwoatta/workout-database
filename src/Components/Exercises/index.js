import React, {Fragment} from 'react'
import { 
  Grid,
  Paper, 
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton 
} from '@material-ui/core';
import {
  Delete as DeleteIcon, 
  Edit as EditIcon
} from '@material-ui/icons';
import {withStyles} from '@material-ui/styles'

import Form from './Form'

const styles = theme => ({
  Paper: {
    padding: 20,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 60px - 60px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    },
    // marginBottom: 10,
    // height: 500
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  Container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 48px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 48px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

export default withStyles(styles)(({
  classes,
  muscles,
  exercise,
  exercises, 
  category, 
  onSelect,
  onDelete, 
  onEdit,
  editMode,
  onEditForm,
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  }
}) => 
  <Grid container spacing={1} className={classes.Container}>
    <Grid item xs={12} sm={6} className={classes.item}>
      <Paper className={classes.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group 
          ? <Fragment key={group}>
              <Typography 
                variant="h6"
                style={{textTransform: 'capitalize'}}
                color="secondary"
                >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => 
                  <ListItem 
                  button
                  key={id}  
                  onClick={() => { onSelect(id) }}
                  >
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton  color="primary" onClick={() => onEdit(id)}>
                        <EditIcon/>
                      </IconButton>
                      <IconButton  color="primary" onClick={() => onDelete(id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
          : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} className={classes.item}>
      <Paper className={classes.Paper}>
        <Typography
            variant="h6"
            gutterBottom
            color="secondary"
          >
              {title}
            </Typography>
        {
          editMode ? 
          <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEditForm}
          />
          : 
            <Typography
              variant="body2">
              {description}
            </Typography>
        }
      </Paper>
    </Grid>
  </Grid>
)