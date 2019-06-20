import React, {Fragment, Component} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Fab,
    Tooltip
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Form from './Form';


export default class extends Component {
    state = {
        open: false
    }

    handleToggle = props => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = exercise => {
        this.handleToggle();
        this.props.onCreate(exercise)
    }

    render() {
        const { open } = this.state,
              { muscles } = this.props
        
        return (
            <Fragment>
                <Tooltip title="Add New Workout">
                    <Fab 
                        size="small"
                        onClick={this.handleToggle}
                        color="secondary"
                    >
                        <AddIcon fontSize="small"/>
                    </Fab>
                </Tooltip>

                <Dialog 
                    aria-labelledby="form-dialog-title" 
                    open={open}
                    onClose={this.handleToggle}
                    maxWidth="md"
                >
                    <DialogTitle id="form-dialog-title">
                        Create a New Workout
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below
                        </DialogContentText>
                    </DialogContent>
                    <Form
                        muscles={muscles}
                        onSubmit={this.handleFormSubmit}
                    />
                </Dialog>
            </Fragment>
        )
    }
}