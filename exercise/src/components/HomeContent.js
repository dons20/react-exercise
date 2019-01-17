import React, {Component} from 'react';
import Button from './Button';
import styles from './TopBar.module.scss';

export default class HomeContent extends Component {
  render() {
    const { loggedIn, toggleLogin } = this.props;

    return (
      <div>
        <Button 
          className={`${styles.button} ${styles.alternate}`}
          onClick={toggleLogin}
        >
          {loggedIn ? 'Logout' : 'Login'}
        </Button>
      </div>
    );
  }
}
