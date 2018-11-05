// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import IssuesList from './IssuesList';
import SortIssues from './SortIssues'
import { fetchIssues } from 'actions/issuesActions';

import type { OpenIssues } from 'types/api.types';

const ListSortWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

type ConnectedProps = {
  fetchIssues: () => void,
  openIssues: OpenIssues
};

class IssuesPage extends Component<ConnectedProps> {
  componentDidMount() {
    this.props.fetchIssues();
  }

  componentWillReceiveProps({ openIssues }) {
    console.log(openIssues);
  }

  render() {
    return (
      <div>
        <ListSortWrapper>
          <SortIssues/>
          <IssuesList openIssues={this.props.openIssues} />
        </ListSortWrapper>
      </div>
    );
  }
}

const mapStateToProps = ({ issues }) => ({
  openIssues: issues.openIssues
});

export default connect(
  mapStateToProps,
  { fetchIssues }
)(IssuesPage);
