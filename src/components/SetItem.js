import React from 'react';
import { connect } from 'react-redux';
import {  startAddSet } from '../actions/sets'

class SetItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            reps: '',
            weight: '',
            setCreated: false,
            exerciseNotDone: true 
        }
    }

    changeReps= (e) => {
        e.preventDefault();

        const reps = e.target.value;
        this.setState(() => ({
            reps
        }))
    }

    changeWeight= (e) => {
        e.preventDefault();

        const weight = e.target.value;
        this.setState(() => ({
            weight
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.setState(() => ({
            setCreated: true
        }))
        const reps = this.state.reps;
        const weight = this.state.weight;
        const eid = this.props.eid;
        const wid = this.props.wid;
        const uid = this.props.uid;
        console.log(this.props)
        this.props.dispatch(startAddSet(uid, wid, eid, reps, weight))
    
    }
    finishExercise = () => {
        this.setState(() => ({
            exerciseNotDone: false,
            setCreated: true
        }))

        this.props.exerciseFinished()
    }

    render(){
        return(
            <div>
                <h1>Set</h1>
                {
                    this.state.setCreated ?
                    <div>
                        <p>Reps {this.state.reps}</p>
                        <p>Weight {this.state.weight}</p>
                        {this.state.exerciseNotDone ? <SetItem {...this.props} /> : <br/>}
                    </div>
                    
                    :
                    <div>
                        <form onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            placeholder='Number of Reps'
                            autoFocus
                            className="text-input"
                            value={this.state.reps}
                            onChange={this.changeReps}
                        />
                        <input 
                            type="text"
                            placeholder='Amount of Weight'
                            className="text-input"
                            value={this.state.weight}
                            onChange={this.changeWeight}
                        />
                        <button>Finish Set</button>
                        </form>
                        <button onClick={this.finishExercise}>Finish Exercise</button>
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const last = state.exercises.length;
    return {
        eid: state.exercises[0] === undefined ? 0 : state.exercises[last - 1]. eid,
        wid: state.workouts.wid,
        uid: state.auth.uid
    }
}
export default connect(mapStateToProps)(SetItem);