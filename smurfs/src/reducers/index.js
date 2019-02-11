/*
  Be sure to import in all of the action types from `../actions`
*/
import {ACTIONS} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const emptyVillage = {
  smurfs: [],
  findingSmurfs: false,
  deliveringSmurf: false,
  changingSmurf: false,
  deletingSmurf: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const papaSmurf = (village = emptyVillage, action) => {
  switch (action.type) {
    case ACTIONS.FINDING_SMURFS:
    return {...village, findingSmurfs: true};

    case ACTIONS.SMURFS_FOUND:
    return {...village, findingSmurfs: false, smurfs:action.smurfs};

    case ACTIONS.DELIVERING_SMURF:
    return village;

    case ACTIONS.SMURF_DELIVERED:
    return village;

    case ACTIONS.CHANGING_SMURF:
    return village;

    case ACTIONS.SMURF_CHANGED:
    return village;

    case ACTIONS.DELETING_SMURF:
    return village;

    case ACTIONS.SMURF_DELETED:
    return village;
  }
}

export default papaSmurf;