import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import IssuesPage from 'components/IssuesPage'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={IssuesPage}/>
    </Switch>
  </Router>
);

export default AppRouter;
