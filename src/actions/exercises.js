import moment from 'moment';
import database from '../firebase/firebase';

export const addExercise = (eid, exerciseName) => ({
    type: 'ADD_EXERCISE',
    eid,
    exerciseName
})

export const startAddExercise = (exerciseName) => {
    return ( dispatch) => {
            database.ref('exercises').push({exerciseName}).then((snapshot) => {
                return (dispatch(addExercise(snapshot.key, exerciseName)))
        })
    }
}