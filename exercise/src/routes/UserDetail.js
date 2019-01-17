import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from "../app";
import styles from "./Users.module.scss";

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoading: true
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        const { data } = this.context;
        const { id } = this.props.match.params;

        if (data) {
            document.title = `Details of ${data[id-1].name.first}`;
        }
    }
    
    render() { 
        const { users, data } = this.context;
        const { id } = this.props.match.params;
        let realId = id - 1;

        if (!users) {
            return (<Redirect to="/users" />)
        }

        return ( 
            <div className={styles.page}>
                <div 
                    className={styles.back}
                    onClick={() => this.goBack()}
                />
                <div className={styles.card}>
                    <div className={styles.userLayout}>
                        <div className={styles.picture}>
                            {this.state.imageLoading && <div className={styles.loading} />}
                            <img 
                                src={data[realId].picture.large}
                                alt={`${data[realId].name.first}`}
                                className={styles.profilePic}
                                onLoad={() => this.setState({imageLoading: false})}
                            />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>
                                Full Name: {data[realId].name.first} {data[realId].name.last}
                            </p>
                            <p>Email: {data[realId].email}</p>
                            <p>Phone: {data[realId].phone}</p>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

UserDetails.contextType = AppContext;