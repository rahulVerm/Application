import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Icon, Divider } from 'antd';
import { Popconfirm, message } from 'antd';
import ln from '../language/en';
import { Chart } from './components/charts'
import Header from '../src/components/header';
import Footer from '../src/components/footer';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            error: {}
        }
    }


    signup = () => {

    }



    render() {

        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="form-signin">
                        <h2 className="form-signin-heading">Create your account</h2>
                        <div className="m-b-20">
                            <input name="firstName" type="text" className="form-control" placeholder="First Name" required=""
                                onChange={(e) => { this.setState({ firstName: e.target.value }) }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="m-b-20">
                            <input type="text" className="form-control" name="lastName" placeholder="Last Name" required=""
                                onChange={(e) => { this.setState({ lastName: e.target.value }) }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="m-b-20">
                            <input type="text" className="form-control" name="userName" placeholder="User Name" required=""
                                onChange={(e) => { this.setState({ userName: e.target.value }) }}
                                value={this.state.userName}
                            />
                        </div>
                        <div className="m-b-20">
                            <input type="password" className="form-control" name="password" placeholder="Password" required=""
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.signup} >{ln.signup}</button>
                        <div className="m-t-10">
                            <a onClick={() => { this.props.history.push("/") }} className="" >{ln.loginInstead}</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}



