import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import styles from './TopBar.module.scss';

export default class TopBar extends Component {
  render() {
    const { loggedIn, toggleLogin } = this.props;

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>
          <Button 
            className={{...styles.button, ...styles.primary}}
            onClick={loggedIn ? null : toggleLogin}
          >
            {loggedIn ? 'KC' : 'Login'}
          </Button>
          <Button 
            className={{...styles.button, ...styles.secondary}}
            onClick={loggedIn ? toggleLogin : null}
          >
            {loggedIn ? 'Logout' : 'Signup'}
          </Button>
        </div>
      </header>
    );
  } 
}

