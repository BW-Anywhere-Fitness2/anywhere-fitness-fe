import React from "react";
import { connect } from "react-redux";
import UserList from './UserList';
import { fetchData } from '../actions'
import { withRouter } from 'react-router-dom'

class UserListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    if (this.props.fetchingUsers) {
      return (
      <h2>Fetching Users...</h2>
      )
    }
    return (
      <div className='UserList'>
        <UserList users={this.props} />
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    Users: state.users,
    fetchingUsers: state.fetchingUsers
  }
}


export default withRouter(connect(
  mapStateToProps,
  { fetchData }
)(UserListView)
) 