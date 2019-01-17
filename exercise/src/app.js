import React, { Component } from 'react';

export const AppContext = React.createContext("default");

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            updateProperty: (prop, value) => this.update(prop, value)
        }
    }

    update(prop, value) {
        this.setState({...this.state, [prop]: value});
    }

    render() { 
        return ( 
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
