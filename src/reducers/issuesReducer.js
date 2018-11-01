import { handleActions, combineActions } from 'redux-actions';
import { set } from 'lodash/fp';

const initialState = {
  openIssues: []
};

export default handleActions ({
  SET_ISSUES: (state, {openIssues}) =>
    set('openIssues', openIssues, state)
},initialState)