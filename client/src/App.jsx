import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBreak: false,
            weather: null,

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            onBreak: !this.state.onBreak
        })
    }

    render() {
        return (
            <div>
                <Button handleClick={this.handleClick} />
            </div>
        )
    }
}