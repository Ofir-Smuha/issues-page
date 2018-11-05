// @flow
import type { OpenIssues } from 'types/api.types';

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const SET_ISSUES = 'SET_ISSUES';
export const SET_ERROR = 'SET_ERROR';

export const fetchIssues = () => ({
  type: FETCH_ISSUES,
  payload: {
    onSuccess: setIssues,
    onError: setError
  },
  meta: {
    type: 'api',
    url: 'https://api.github.com/repos/facebook/create-react-app/issues',
    method: 'get'
  }
});

type Action = {
  type: string
};

export const setIssues = (openIssues: OpenIssues) => ({
  type: SET_ISSUES,
  payload: {
    openIssues
  }
});

export const setError = (): Action => ({
  type: SET_ERROR
});
