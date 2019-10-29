import React from "react";
import UserList from "./userList";
import { Loading } from "../shared/loading";

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }
  componentWillMount() {
    fetch("//localhost:3000/api/users")
      .then(response => response.json())
      .then(users => this.setState({ users, isLoading: false }))
      .catch(error => console.error(error));
  }
  render() {
    const { users, isLoading } = this.state;
    return (
      <div className="ys-container-fluid user-list">
        {isLoading && <Loading />}
        {!isLoading && <UserList users={users} />}
      </div>
    );
  }
}

export default UserListContainer;
