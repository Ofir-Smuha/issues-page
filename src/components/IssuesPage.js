import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchIssues } from "actions/issuesActions";

class IssuesPage extends Component<{}> {

  componentDidMount(){
    console.log('mounted')
    this.props.fetchIssues()
  }

  render() {
    return (
      <div>
        {this.props.openIssues.map(issue => <h1>{issue.body}</h1>)}
      </div>
    );
  }
}

const mapStateToProps = ({issues}) => ({
  openIssues: issues.openIssues
})

export default connect(mapStateToProps, {
  fetchIssues
})(IssuesPage);