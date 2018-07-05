import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Signup from './signup';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        </HashRouter>;
    }
} 