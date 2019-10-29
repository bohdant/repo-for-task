import React from "react";
import User from "./user";
import { Loading } from "../shared/loading";

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      user: {},
      isOpen: true,
      isLoading: true
    };
  }
  componentDidMount() {
    fetchUser(this.props.userIdName.id, this.setState.bind(this));
  }
  componentDidUpdate() {
    if (this.props.userIdName.id !== this.state.user.id) {
      fetchUser(this.props.userIdName.id, this.setState.bind(this));
    }
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { user, isLoading, isOpen } = this.state;
    const isNewUser = this.props.userIdName.id !== user.id;

    return (
      <div
        id="myModal"
        className="modal"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-content ys-card">
          <div className="modal-header">
            <span className="close" onClick={this.closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="ys-icon">
                <use xlinkHref="/assets/svg/sprite/icons.svg#ys-icon-close"></use>
              </svg>
            </span>
            <h2>User profile: {this.props.userIdName.name} </h2>
          </div>
          <div className="modal-body">
            {(isLoading || isNewUser) && <Loading />}
            {(!isLoading || !isNewUser) && <User user={user} />}
          </div>
        </div>
      </div>
    );
  }
}

function fetchUser(userId, setState) {
  fetch(`//localhost:3000/api/user/${userId}`)
    .then(response => response.json())
    .then(user => setState({ user, isLoading: false, isOpen: true }))
    .catch(error => console.error(error));
}
export default UserContainer;
