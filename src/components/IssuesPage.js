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
        <h1>1</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//
// })

export default connect(null, {
  fetchIssues
})(IssuesPage);