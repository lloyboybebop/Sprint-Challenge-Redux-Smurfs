import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ACTIONS = {
  FINDING_SMURFS: 'FINDING_SMURFS', SMURFS_FOUND: 'SMURFS_FOUND', 

  DELIVERING_SMURF: 'DELIVERING_SMURF', SMURF_DELIVERED: 'SMURF_DELIVERED', 

  CHANGING_SMURF: 'CHANGING_SMURF', SMURF_CHANGED: 'SMURF_CHANGED',

  DELETING_SMURF: 'DELETING_SMURF', SMURF_DELETED: 'SMURF_DELETED',
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const findSmurfs = () => dispatch => {
  console.log('Finding Smurfs')

  dispatch({type: ACTIONS.FINDING_SMURFS});
  axios.get('http://localhost:3333/smurfs')
  .then(response => {console.log(response); return dispatch({type: ACTIONS.SMURFS_FOUND, smurfs: response.data})})
  .catch(err => console.log('ERROR FINDING SMURF:', err.message))
}

 export const deliverSmurf = () => {
  console.log('Deliver Smurf')
}

 export const changeSmurf = () => {
  console.log('Change Smurf')
}

 export const deleteSmurf = () => {
  console.log('Delete Smurf')
}
