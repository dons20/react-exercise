import React, { Component } from "react";
import { AppContext } from "../app";
import styles from "./Users.module.scss";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    document.title = "List of Users"
    let { users } = this.context;
    if (users && users.length > 0) {
      this.setState({ users: users, loading: false });
    } else {
      this.fetchData();
    }
  }

  navigate(id) {
    this.context.updateProperty("users", this.state.users);
    this.context.updateProperty("data", this.state.data);
    this.props.history.push(`/users/${id+1}`);
  }

  async fetchData() {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        let users = data.results.map((user, index) => {
          return (
            <div
              className={styles.listItem}
              key={`${user.name.first}-${index}`}
              onClick={() => this.navigate(index)}
            >
              <p className={styles.name}>
                {user.name.first} {user.name.last}
              </p>
              <div>{`${user.email} ${user.phone}`}</div>
            </div>
          );
        });
        this.setState({ users: users, loading: false, data: data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { users } = this.state;

    return (
      <div className={styles.page}>
        <h1>User Details</h1>
        <div className={styles.list}>
          {this.state.loading && <div className={styles.loading} />}
          {users}
        </div>
        {!this.state.loading && (
          <div className={styles.refresh} onClick={() => {
              this.setState({users: [], loading: true});
              this.fetchData();
            }}>
            Load new entries
          </div>
        )}
      </div>
    );
  }
}

UserList.contextType = AppContext;

export default UserList;
