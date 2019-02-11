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

 export const deliverSmurf = smurf => dispatch => {
  console.log('Deliver Smurf')

  dispatch({type: ACTIONS.DELIVERING_SMURF});
  axios.post('http://localhost:3333/smurfs/', {...smurf})
  .then(response => dispatch({type: ACTIONS.SMURF_DELIVERED, smurfs: response.data}))
  .catch(err => console.log('ERROR DELIVERING SMURFS:', err.message))
}

 export const changeSmurf = smurf => dispatch => {
  console.log('Change Smurf')

  dispatch({type: ACTIONS.CHANGING_SMURFS});
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
  .then(response => {console.log(response); return dispatch({type: ACTIONS.SMURF_CHANGED, smurfs: response.data})})
  .catch(err => console.log('ERROR CHANGING SMURFS:', err.message))
}

 export const deleteSmurf = smurf => dispatch => {
  console.log('Delete Smurf')

  dispatch({type: ACTIONS.DELETING_SMURFS});
  axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
  .then(response => {console.log(response); return dispatch({type: ACTIONS.SMURF_DELETED, smurfs: response.data})})
  .catch(err => console.log('ERROR DELETING SMURFS:', err.message))
}
