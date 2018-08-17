import database from '../firebase/firebase';



export const addRoutine = (rid, routineName) => ({
    type: 'ADD_ROUTINE',
    rid,
    routineName
})

export const startAddRoutine = (routineName) => {
    return ( dispatch) => {
            const routines = {description:'' , routineName}
            return database.ref('routines').push({ ...routines}).then((snapshot) => {
                return (dispatch(addRoutine(snapshot.key, routineName)))
        })
    }
}

  