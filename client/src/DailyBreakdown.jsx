import React from 'react';
import styled from 'styled-components';
import SessionEntry from './SessionEntry.jsx';

const SessionsWrapper = styled.div`
    bottom: 0;
    display:flex;
    flex-direction: row;
    position: relative;
`;

const EntryWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin: 0;
    padding: 0;
`;

class DailyBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: this.props.session,
            // timeSinceMidnight: 0,
            // timeTillTomorrow: 0,
            // breathingTime: 0,
            data: [
                { name: 'STRESS', value: 0 },
                { name: 'Whew', value: 0 },
                { name: '???', value: 0 }
              ]
        }
        this.convertToSeconds = this.convertToSeconds.bind(this);
        this.totalBreathingTime = this.totalBreathingTime.bind(this);
        this.calculateTimeSinceMidnight = this.calculateTimeSinceMidnight.bind(this);
        this.calculateTimeUntilTomorrow = this.calculateTimeUntilTomorrow.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.session !== prevProps.session) {
            this.setState({
                sessions: this.props.session,
                data: [
                    { name: 'STRESS', value: (this.calculateTimeSinceMidnight() - this.totalBreathingTime(this.props.session)) },
                    { name: 'Whew', value: this.totalBreathingTime(this.props.session) },
                    { name: '???', value: this.calculateTimeUntilTomorrow() }
                ]
            })
        }
    };

    // function will initially calculate time in ms
    calculateTimeSinceMidnight() {
        let now = new Date();
        let then = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0,0,0
        );
        // return value in seconds
        return Math.floor((now.getTime() - then.getTime())/1000);
    };

    // function will initially calculate time in ms
    calculateTimeUntilTomorrow() {
        let now = new Date();
        let future = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            0,0,0
        );
        // return value in seconds
        return Math.floor((future.getTime() - now.getTime())/1000);
    };

    totalBreathingTime(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += this.convertToSeconds(array[i]);
        }
        return total;
    };

    convertToSeconds(string) {
        let output = 0;
        let numericalBreakdown= [];
        const breakdown = string.split(' ');
        // return breakdown;
        for (let i = 0; i < breakdown.length; i++) {
            let numstr = breakdown[i].split('');
            numstr.splice(-1);
            numericalBreakdown.push(parseInt(numstr.join('')));
        }
        output += numericalBreakdown[0] * 3600;
        output += numericalBreakdown[1] * 60;
        output += numericalBreakdown[2];
        return output;
    };

    render() {
        if (this.state.sessions === null) {
            return (
                <div>No breaks taken today!</div>
            )
        } else {
            return (
                <SessionsWrapper>
                    <EntryWrapper>
                        <SessionEntry data={this.state.data}/>
                    </EntryWrapper>
                </SessionsWrapper>
            )
        }
    }
}

export default DailyBreakdown;
