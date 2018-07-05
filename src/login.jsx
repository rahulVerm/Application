import React from 'react';
import ReactDOM from 'react-dom';
import ln from '../language/en';
import Header from '../src/components/header';
import Footer from '../src/components/footer';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            errors: {}
        }
    }
    handleValidation = () => {
        let errors = {};
        let formIsValid = true;

        //userName
        if (!this.state.userName) {
            formIsValid = false;
            errors["userName"] = "*Required";
        }
        if (typeof this.state.userName !== "undefined") {
            if (!this.state.userName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["userName"] = "*Required";
            }
        }

        //password
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Required";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }



    login = (e) => {
        if (this.handleValidation()) {
            if (this.props.location.pathname !== "/dashboard") {
                this.props.history.push("/dashboard");
            }
        } else {
            e.preventDefault();
            // alert("Form has errors.");
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="form-signin">
                        <h2 className="form-signin-heading">{ln.pleaseLogin}</h2>
                        <div className="m-b-20">
                            <input name="userName" type="text" className="form-control" placeholder="User Name" required="required"
                                onChange={(e) => { this.setState({ userName: e.target.value }) }}
                                value={this.state.userName}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["userName"]}</span>
                        </div>
                        <div className="m-b-20">
                            <input name="password" type="password" className="form-control" placeholder="Password" required=""
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                                value={this.state.password}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                        </div>
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> {ln.rememberMe}
                        </label>
                        <button className="btn btn-lg btn-primary btn-block button" onClick={this.login} >{ln.login}</button>
                        <div className="m-t-10">
                            <a onClick={() => { this.props.history.push("/signup") }} >{ln.createAccount}</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}



