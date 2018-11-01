import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchIssues } from "actions/issuesActions";

type Props = {
  fetchIssues: () => void,
  openIssues: {}[]
}

class IssuesPage extends Component<Props> {

  componentDidMount(){
    this.props.fetchIssues()
  }

  render() {
    return (
      <div>
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