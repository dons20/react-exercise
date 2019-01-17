import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import styles from './TopBar.module.scss';
import classNames from 'classnames';

export default class TopBar extends Component {
  render() {
    const { loggedIn, toggleLogin } = this.props;
    let loginBtn = classNames(styles.button, { 
          [`${styles.primary}`]: !loggedIn,
          [`${styles.user}`]: loggedIn
      }),
        signupBtn = classNames(styles.button, { 
          [`${styles.secondary}`]: !loggedIn,
          [`${styles.logout}`]: loggedIn
      });

    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">
              <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
            </Link>
          </div>
          <div>
            {'Modus Create'}
          </div>
        </div>
        <div className={styles.right}>
          <Button 
            className={loginBtn}
            onClick={loggedIn ? null : toggleLogin}
          >
            {loggedIn ? 'KC' : 'Login'}
          </Button>
          <Button 
            className={signupBtn}
            onClick={loggedIn ? toggleLogin : null}
          >
            {loggedIn ? 'Logout' : 'Signup'}
          </Button>
        </div>
      </header>
    );
  } 
}

