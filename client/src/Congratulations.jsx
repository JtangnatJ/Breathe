import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';


const Quote = styled.div`
    font-size: 30px;
    postion: absolute;
    text-align: center;
`;


class Congratulations extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {this.props.handleCongratulations()}, 300000);
        this.saveSession(this.breakDuration(this.props.totalTime))
    }

    saveSession(string) {
        $.ajax({
            type: 'POST',
            url: '/api/breatheSessions',
            data: string,
            success: () => {console.log('successfully posted')},
            error: () => {console.log('error posting')}
        })
    }

    breakDuration(num) {
        let seconds = Math.floor(num/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        seconds = seconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    }

    render() {
        return (
            <Quote onClick={this.props.handleCongratulations}>
                Congratulations!<br />
                You breathed for:<br />
                {this.breakDuration(this.props.totalTime)}<br />
                Ready to crush it?
            </Quote>
        )
    }
}

export default Congratulations;