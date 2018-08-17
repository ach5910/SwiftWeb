import React from 'react';
import SetList from './SetList';
import WorkOutForm from './WorkOutForm';

export default class  ExerciseItem extends React.Component {
    constructor(props){
        super(props)

        this.state={
            exerciseName: '',
            exerciseNameCreated: false,
            exerciseFinished: false
        }
    }

    callback = (exerciseName) => {
        this.setState(() => ({
            exerciseName,
            exerciseNameCreated: true
        }))
    }

    exerciseFinished = () => {
        this.setState(() => ({
            exerciseFinished : true
        }))
    }
    render() {
        return(
            <div>
                {
                    this.state.exerciseNameCreated ?
                    <div>
                        <h1>{this.state.exerciseName}</h1>
                        <SetList exerciseFinished={this.exerciseFinished}/>
                    </div>
                    :
                    <WorkOutForm callback={this.callback} name={'Exercise'} />
                    
                }
                {this.state.exerciseFinished && <ExerciseItem />}
                
            </div>
        )
    }

}

