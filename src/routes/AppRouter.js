import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import IssuesPage from 'components/IssuesPage'
import IssueDetails from 'components/IssueDetails'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/issues' component={IssuesPage}/>
      <Route exact path='/issues/:issueId' component={IssueDetails}/>
      <Redirect from='/' to='/issues'/>
    </Switch>
  </Router>
);

export default AppRouter;
