// @flow
import React from 'react';
import styled from 'styled-components'

import IssuePreview from './IssuePreview';

import type { OpenIssues, OpenIssue } from 'types/api.types';

const List = styled.ul`
  background-color: #F7F8FB;
  padding: 2px 0;
`;

// type Props = {
//   openIssues: openIssues
// };

const IssuesList = ({ openIssues }: {openIssues: OpenIssues }) => {
  return (
    <List>
      {openIssues.map(openIssue => (
        <IssuePreview key={openIssue.id} openIssue={openIssue} />
      ))}
    </List>
  );
};

export default IssuesList;
