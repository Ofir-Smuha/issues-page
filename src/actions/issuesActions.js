import * as AT from 'actions/types'

export const  fetchIssues = () => ({
  type: AT.FETCH_ISSUES,
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

export const setIssues = () => ({
  type: AT.SET_ISSUES
});

export const setError = () => ({
  type: AT.SET_ERROR
});