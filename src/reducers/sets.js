const defaultRoutine= {
    eid: '',
    exerciseName: ''
}
  
  
export default (state = [], action) => {
    switch (action.type) {
    case 'ADD_SET':
        const set = {sid: action.sid, reps: action.reps, weight: action.weight, eid: action.eid}
        return [
            ...state,
            set
        ]
        default:
        return state;
    }
};