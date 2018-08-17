const defaultRoutine= {
  rid: '',
  routineName: ''
}


export default (state = defaultRoutine, action) => {
    switch (action.type) {
      case 'ADD_ROUTINE':
        return {
          rid: action.rid,
          routineName: action.routineName
        };
      default:
        return state;
    }
  };


