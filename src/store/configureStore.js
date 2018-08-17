import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import routinesReducer from '../reducers/routines';
import workoutReducer from '../reducers/workouts';
import exerciseReducer from '../reducers/exercises';
import setsReducer from '../reducers/sets'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      routines: routinesReducer,
      workouts: workoutReducer,
      exercises: exerciseReducer,
      sets: setsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
