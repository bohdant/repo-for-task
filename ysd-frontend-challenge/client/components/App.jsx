import React from 'react';
import UserListContainer from './userList/userListContainer';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1 className="ys-main-title">Users</h1>
        <UserListContainer />
      </div>
    );
  }

}

export default App;