import React, {Component} from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Typography,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'


const useStyles = theme => ({
    formControl: {
        width: 300,
        marginLeft: 10,
        marginRight: 10
    }
})

export default withStyles(useStyles)(class extends Component {
    state = this.getInitialState()

    getInitialState() {
        let { exercise } = this.props
        // console.log(exercise)

        exercise = {workouts: exercise} 

        return exercise && exercise.workouts !== undefined ? exercise :
        {   
            open: false,
            workouts: {
                title: '',
                description: '',
                muscle: ''
            }
        }
    }

    componentWillReceiveProps({exercise}) {
        this.setState({
            workouts: {...exercise}
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
        this.props.onSubmit({
            id: workouts.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...workouts
        })

        this.getInitialState()
        // this.setState({
        //     open: false,
        //     workouts: {
        //         title: '',
        //         description: '',
        //         muscles: ''
        //     }
        // })
    }
    
    render() {
        const { title, description, muscles } = this.state.workouts
        const { muscles: categories, classes } = this.props

        return (
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

                <br/>
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleSubmit}
                    style={{margin: 10}}
                >
                    {this.props.exercise ? 'Edit':'Create'}
                </Button>
            </form>
        )
    }
})