import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  render() {
    return (
      <div className="App">
        <TopBar 
          loggedIn={this.state.loggedIn}
          toggleLogin={this.handleLogin}
        />
        <HomeContent 
          loggedIn={this.state.loggedIn}
          toggleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

