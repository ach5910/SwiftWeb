const defaultRoutine= {
    eid: '',
    exerciseName: ''
  }
  
  
  export default (state = [], action) => {
      switch (action.type) {
        case 'ADD_EXERCISE':
            const exercise = {eid: action.eid, exerciseName: action.exerciseName}
            return [
              ...state,
                exercise
            ]
            default:
            return state;
      }
    };