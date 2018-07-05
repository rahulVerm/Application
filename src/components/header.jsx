import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Icon type="dropbox" className="icon" />
                    </div>
                </div>
            </nav>
        )
    }

}