import React from 'react';

export default class SetItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            reps: '',
            weight: '',
            setCreated: '',
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
                        {this.state.exerciseNotDone ? <SetItem exerciseFinished={this.props.exerciseFinished}/> : <br/>}
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
