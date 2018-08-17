import React from 'react';
import ExerciseList from './ExerciseList';
import WorkOutForm from './WorkOutForm';

export default class AddWorkout extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            routineName: '',
            routineNameCreated: false
        }
    }

    callback = (routineName) => {

        this.setState(() => ({
            routineName,
            routineNameCreated: true
        }))

    }
    render(){
        return (
            <div>
                <h1>Add Workout</h1>
                {this.state.routineNameCreated ?
                    <div>
                        <h1>{this.state.routineName}</h1>
                        <ExerciseList/>                            
                    </div>
                    :
                    <WorkOutForm callback={this.callback} name={"Routine"}/>
                }
            </div>
        )
    }

}
