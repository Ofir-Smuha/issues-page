// @flow
import { handleActions } from 'redux-actions';
import { set } from 'lodash/fp';

import type { OpenIssues } from 'types/api.types';

type IssuesState = {
  openIssues: OpenIssues
};

const initialState: IssuesState = {
  openIssues: []
};

export default handleActions<IssuesState, Object>(
  {
    SET_ISSUES: (state, { payload }): IssuesState =>
      set('openIssues', payload.openIssues, state)
  },
  initialState
);
