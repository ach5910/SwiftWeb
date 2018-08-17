import database from '../firebase/firebase';

export const addSet = (sid, reps, weight, eid) => ({
    type: 'ADD_SET',
    sid,
    reps,
    weight,
    eid
})

export const startAddSet = (uid, wid, eid, reps, weight ) => {
    return ( dispatch) => {
            const set = {eid, reps, weight}
            database.ref(`users/${uid}/workouts/${wid}/sets`).push({...set}).then((snapshot) => {
                return (dispatch(addSet(snapshot.key, reps, weight, eid)))
        })
    }
}