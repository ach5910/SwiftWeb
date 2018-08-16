import React from 'react';
import ExerciseList from './ExerciseList';

export default class AddWorkout extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            routineName: '',
            exercises: [{
                id: 0,

            }]
        }
    }


    render(){
        return(
            <div>
                <h1>Add Workout</h1>
                <form>
                    <input 
                        type="text"
                        placeholder="Routine Name"
                        autoFocus
                        className="text-input"
                        value={this.state.routineName}
                        onChange={this.routineNameChange}
                    />
                </form>
                <ExerciseList />
            </div>
        )
    }
}
