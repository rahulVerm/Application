import React from 'react';
import ReactDOM from 'react-dom';
import ln from '../../language/en'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
            <p>{ln.copyRights}</p>
        </div>
        )
    }
}