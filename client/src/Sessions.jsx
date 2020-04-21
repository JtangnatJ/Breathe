import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import DailyBreakdown from './DailyBreakdown.jsx';

const Wrapper = styled.div`
    background-color: lightblue;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0;
`;

const Title = styled.div`
    position: relative;
    top: 200px;
    font-size: 45px;
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
                    dailySession: data[0]
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
                    <Title>Daily?</Title>
                    <DailyBreakdown session={this.state.dailySession}/>
                </Wrapper>
            )
        }
    }
}

export default Sessions;