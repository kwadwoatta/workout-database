import React, {Fragment, Component} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Fab,
    DialogActions,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

const useStyles = theme => ({
    formControl: {
        width: 500,
        marginLeft: 10,
        marginRight: 10
    }
})

export default withStyles(useStyles)(class extends Component {
    state = {
        open: false,
        workouts: {
            title: '',
            description: '',
            muscle: ''
        }
    }

    handleToggle = props => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({target: { value }}) => {
        console.log(value)
        this.setState({
            workouts: {
                ...this.state.workouts,
                [name]: value
            }
        })}

        handleSubmit = () => {
           let {workouts} = this.state
           this.props.onCreate({
               ...workouts,
               id: workouts.title.toLocaleLowerCase().replace(/ /g, '-')
           })

           this.setState({
               open: false,
               workouts: {
                   title: '',
                   description: '',
                   muscle: ''
               }
           })
        }

    render() {
        const { open, workouts: {title, description, muscles} } = this.state,
              { muscles: categories, classes } = this.props
        
        return (
            <Fragment>
                <Fab 
                    size="small"
                    onClick={this.handleToggle}>
                    <AddIcon fontSize="small"/>
                </Fab>

                <Dialog aria-labelledby="form-dialog-title" 
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle id="form-dialog-title">
                        Create a New Workout
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below
                        </DialogContentText>
                    </DialogContent>
                    <form>
                        <TextField
                            id="standard-name"
                            label="Title"
                            margin="normal"
                            onChange={this.handleChange("title")}
                            value={title}
                            className={classes.formControl}
                        />
                        
                        <br/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="muscles">
                                <Typography>Muscles</Typography>
                            </InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange('muscles')}
                            >
                                {categories.map(category => (
                                    <MenuItem key={category} value={category}>{category}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br/>

                        <TextField
                            id="standard-name"
                            label="Description"
                            multiline
                            rows="4"
                            variant="outlined"
                            margin="normal"
                            onChange={this.handleChange("description")}
                            value={description}
                            className={classes.formControl}
                        />
                    </form>

                    <DialogActions>
                        <Button 
                            color="primary" 
                            variant="contained"
                            onClick={this.handleSubmit}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}) 