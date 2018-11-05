// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { OpenIssues } from "types/api.types";

import { fetchIssues } from 'actions/issuesActions';

type ConnectedProps = {
  fetchIssues: () => void,
  openIssues: OpenIssues
};

class IssuesPage extends Component<ConnectedProps> {
  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    return <div/>;
  }
}

const mapStateToProps = ({ issues }) => ({
  openIssues: issues.openIssues
});

export default connect(mapStateToProps, { fetchIssues })(IssuesPage);
