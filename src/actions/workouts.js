import moment from 'moment';
import database from '../firebase/firebase';

export const addWorkout = (wid, time, rid) => ({
    type: 'ADD_WORKOUT',
    wid,
    time,
    rid
})

export const startAddWorkout = (rid, time) => {
    return ( dispatch, getState) => {
            console.log(rid)
            console.log(time)        
            const workouts = {rid, time}
            const uid = getState().auth.uid;
            database.ref(`users/${uid}/workouts`).push({ ...workouts}).then((snapshot) => {
                return (dispatch(addWorkout(snapshot.key, time, rid)))
        })
    }
}