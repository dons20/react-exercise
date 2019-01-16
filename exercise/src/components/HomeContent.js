import React, {Component} from 'react';
import Button from './Button';
export default class HomeContent extends Component {
  render() {
    const { loggedIn, toggleLogin } = this.props;

    return (
      <div>
        <Button onClick={toggleLogin}>
          {loggedIn ? 'Logout' : 'Login'}
        </Button>
      </div>
    );
  }
}
