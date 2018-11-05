import React, {Component} from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

class IssueDetails extends Component {

  componentDidMount(){
    console.log(this.props.match.params.issueId)
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
      </div>
    );
  }
}

export default connect(null)(IssueDetails);

