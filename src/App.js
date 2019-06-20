import React, {Component, Fragment} from "react";
import {CssBaseline} from '@material-ui/core';

import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises';
import {muscles, exercises} from './store';

export default class App extends Component {
  state = { 
    exercises,
    exercise: {},
    category: '',
    editMode: false
  }

  getExercisesByMuscles() {
    const initialWorkouts = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise]

      return exercises
    }, initialWorkouts))
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  

  handleExerciseCreate = exercise => 
    this.setState(({ exercises }) => ({
        exercises: [
          ...exercises,
          exercise
        ]
    }))
  

  handleExerciseDelete = id => 
    this.setState(({exercises, exercise, editMode}) => ({
      exercises: exercises.filter(exercise => exercise.id !== id),
      editMode: exercise.id === id ? false: editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  

  handleWorkoutEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  
    handleExerciseEdit = exercise => {
      this.setState(({ exercises: prevStateExercises }) => ({
        exercises: [
          ...prevStateExercises.filter(exes => exes.id !== exercise.id),
          exercise
        ],
        exercise
      }))
    }

  render() {  
    const exercises = this.getExercisesByMuscles();
    let { category, exercise, editMode } = this.state;

    return (
      <Fragment>
      <CssBaseline/>
        <Header
          muscles={muscles}
          onCreateExercise={this.handleExerciseCreate}
        />
        <Exercises 
          muscles={muscles}
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onEdit={this.handleWorkoutEdit}
          editMode={editMode}
          onEditForm={this.handleExerciseEdit}
        />
        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
