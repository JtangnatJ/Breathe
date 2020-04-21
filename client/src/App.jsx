import React from 'react';
import styled from 'styled-components';
import Breathe from './Breathe.jsx';
import Sessions from './Sessions.jsx';

const Option = styled.button`
    float: left;
    background-color: lightblue;
    font-size: 20px;
    position: absolute;
    border: none;
    z-index: 2;
    :hover {
        text-decoration: underline; 
    }
`;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sessions: false,
            // breather: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            sessions: !this.state.sessions
        })
    }

    render() {
        if (this.state.sessions) {
            return(
                <div>
                    <Option onClick={this.handleClick}>Back</Option>
                    <Sessions />
                </div>                
            )
        } else {
            return (
                <div>
                    <Option onClick={this.handleClick}>Sessions</Option>
                    <Breathe />
                </div>
                
            )
        }
    }
}

export default App;