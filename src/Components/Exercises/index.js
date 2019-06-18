import React, {Fragment} from 'react'
import { 
  Grid,
  Paper, 
  Typography,
  List,
  ListItem,
  ListItemText 
} from '@material-ui/core'

// import RightPane from './RightPane'
// import LeftPane from './LeftPane'

const styles = {
  Paper: {
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({
  exercises, 
  category, 
  onSelect, 
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  }
}) => 
  <Grid container spacing={1}>
    <Grid item xs={6}>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group 
          ? <Fragment key={group}>
              <Typography 
                variant="h6"
                style={{textTransform: 'capitalize'}}>
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
                  </ListItem>
                )}
              </List>
            </Fragment>
          : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper style={styles.Paper}>
        <Typography
          variant="h6">
            {title}
          </Typography>
        <Typography
          style={{marginTop: 20}}
          variant="body2">
            {description}
          </Typography>
      </Paper>
    </Grid>
  </Grid>
