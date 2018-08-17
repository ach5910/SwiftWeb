const defaultWorkout = {
    wid: '',
    time: '',
    rid: '',
    sets:[]
}

export default (state = defaultWorkout, action) => {
    switch (action.type) {
      case 'ADD_WORKOUT':
        return {
          rid: action.rid,
          time: action.time,
          wid: action.wid
        };
      default:
        return state;
    }
  };