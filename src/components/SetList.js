import React from 'react';
import SetItem from './SetItem';

const SetList = (props) => {
    const exerciseFinished = () => {
        console.log('Set List')
        props.exerciseFinished();
    }
    return (
        <div>
            <SetItem exerciseFinished={props.exerciseFinished}/>
        </div>
    )
}

export default SetList;