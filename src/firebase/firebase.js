import * as firebase from 'firebase';
import uuid from 'uuid';
import moment from 'moment'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const workoutUID = uuid(
// console.log(uuid())

const user_id = "b7c3367c-e567-477b-aa16-36f1bb75cc58";
// uref.child()
const time = moment().valueOf();
const {userid}  = uuid();
// console.log(userid);
const workoutID = uuid();
const routid = uuid();
const exerid = uuid();
const setid = uuid();
const users = {
  name: 'Aaron',
  age: 25,
  height: 74,
}
// console.log('time' , time);
const workouts = {
  time: time,
  routine_id: '-LJyd1E34zqByIrwluei'
  
}

const routines = {
  routineName: 'Chest',
  description: 'All Chest Day'
}

const exercises = {
  excerciseName: 'Curl',
  description: 'Dumbell Bicep Curl',

}

const sets = {
  reps: '10-8-6-6',
  weight: '100-115-120-125',
  exercise_id: "-LJyd_nFVQqzlI3Mdry-"
}

// Finded exercise by name

// const ref = database.ref('exercises');
// ref.once('child_added').then((snapshot) => {
//   console.log(snapshot.child(`excerciseName`).val());
//   console.log(snapshot.key)
// })


// database.ref(`user/${user_id}/workouts/-LJyoCoeA8Ttsa98TQOr/sets`).push({...sets}).then(() => {
//   console.log('Done');
// })

//  database.ref('workouts').once('value').then((snap) =>{
//   console.log('val', snap.val());
//   console.log('key', snap.key);
// })
// b7c3367c-e567-477b-aa16-36f1bb75cc58
// .then((snap) => {
//   const key = snap.key;
//   database.ref('workout').push({...workouts, key}).then((snap) => {
// })})
// database.ref('sets').push({
//   ...sets
// })

// const uref = database.ref.child('workouts');
// uref.child(wo).set({
//   user
// });