import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import moment from 'moment';
import { get } from 'lodash/fp';

import commentIcon from 'assets/images/comments.svg'
import warning from 'assets/images/warning.svg'

import type { OpenIssue } from 'types/api.types';

const OpenIssueContainer = styled.li`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   background-color: #fff;
   margin: 3px;
   min-height: 61px;
   
   &:hover {
     background-color: #F7F8FB;
   } 
`;

const IconDescriptionContainer = styled.div`
  display: flex;
`;

const AlertIcon = styled.div`
  background-image: url(${warning});
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  margin: 6px 10px;
`;

const IssueDescription = styled.div`
`;

const IssueTitle = styled.h1`
  font-weight: bold;
  margin: 5px 0;
  max-width: 90%;
  cursor: pointer;
`;

const OpendAt = styled.h1`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 0 0;
`;

const CommentIcon = styled.div`
  background-image: url(${commentIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
`;

const Comments = styled.div`
  font-size: 0.9rem;
`;

// type Props = {
//   openIssue: OpenIssue
// };

const IssuePreview = (props) => {

  console.log(props)
  const userName = get('user.login', props.openIssue);
  const { number: issueSerial, created_at: openedAt ,comments, title, id} = props.openIssue;

  return (
    <OpenIssueContainer>
      <IconDescriptionContainer>
        <AlertIcon/>
        <IssueDescription>
          <IssueTitle onClick={() => props.history.push(`/issues/${id}`)}>{title}</IssueTitle>
          <OpendAt>#{issueSerial} opened {moment(openedAt).fromNow()} by {userName}</OpendAt>
        </IssueDescription>
      </IconDescriptionContainer>
      <CommentsContainer>
        <CommentIcon/>
        <Comments>{comments}</Comments>
      </CommentsContainer>
    </OpenIssueContainer>
  );
};

export default withRouter(IssuePreview);
