import React from 'react';
import ExerciseList from './ExerciseList';
import WorkOutForm from './WorkOutForm';
import { connect } from 'react-redux';
import { startAddWorkout } from '../actions/workouts';
import { startAddRoutine } from '../actions/routines';
import moment from 'moment';

class AddWorkout extends React.Component{    
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
        const time = moment().valueOf();   
        this.props.dispatch(startAddRoutine(routineName)).then(() => {
            this.props.dispatch(startAddWorkout(this.props.rid, time))
        })

        console.log(this.props);

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
                <button onClick={() => {this.props.history.push("/")}}>Finish Workout</button>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return  {
        rid: state.routines.rid || ''
    }
    
}

export default connect(mapStateToProps)(AddWorkout);
