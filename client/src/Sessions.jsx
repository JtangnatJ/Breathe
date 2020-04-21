import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import DailyBreakdown from './DailyBreakdown.jsx';

const Wrapper = styled.div`
    background-color: #8EC6C5;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0;
`;

const Title = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 10%;
    font-size: 5em;
`;

const GraphWrapper = styled.div`
    bottom: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 75%
`;

class Sessions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sessions: [],
            dailySession: null,
            daily: true,
            weekly: false,
            monthly: false,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        $.ajax({
            type: 'GET',
            url: '/api/breatheSessions',
            success: (data) => {
                this.setState({
                    sessions: data,
                    dailySession: data[0].sessions
                })
            },
            error: () => {
                console.log('error retrieving data');
            }
        })
    }

    render() {
        if (this.state.daily) {
            return(
                <Wrapper>
                    <Title>Daily Breakdown</Title>
                    <GraphWrapper>
                        <DailyBreakdown session={this.state.dailySession}/>
                    </GraphWrapper>
                </Wrapper>
            )
        }
    }
}

export default Sessions;