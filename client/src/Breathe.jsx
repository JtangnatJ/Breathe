import React from 'react';
import styled, { keyframes } from 'styled-components';
import Statement from './Statement.jsx';
import Congratulations from './Congratulations.jsx';


const breatheAnimation = keyframes`
    0% { height: 400px; width: 400px; opacity: 1 }
    40% { height: 600px; width: 600px; opacity: 0.5 }
    50% { height: 605px; width: 605px; opacity: 0.4; }
    100% { height: 400px; width: 400px; opacity: 1; }
`;

const Wrapper = styled.div`
    background-color: #8EC6C5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0;
`;

const Working = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    border: 2px solid #F4F4F4;
    width: 400px;
    height: 400px;
    margin: auto;
    border-radius: 50%;
`;

const Breather = styled(Working)`
    animation: ${breatheAnimation} 9s infinite;
`;

class Breathe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBreak: false,
            weather: null,
            congratulations: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.timer = this.timer.bind(this);
        this.handleCongratulations = this.handleCongratulations.bind(this);
        this.timing = false;
        this.startTime;
        this.endTime;
        this.totalTime;
    }

    componentDidMount() {
        setTimeout(function(){alert('Breathe')}, 300000);
    }

    handleClick() {
        this.setState({
            onBreak: !this.state.onBreak,
        }, this.timer());
    }

    handleCongratulations() {
        this.setState({
            congratulations: false
        })
    }

    timer() {
        if (!this.timing) {
            this.timing = !this.timing;
            this.startTime = performance.now();
        } else {
            this.timing = !this.timing;
            this.endTime = performance.now();
            this.totalTime = this.endTime - this.startTime;
            this.setState({congratulations:true});
        }
    }

    render() {
        if (this.state.congratulations) {
            return (
                <Wrapper>
                    <Congratulations totalTime={this.totalTime} handleCongratulations={this.handleCongratulations} />
                </Wrapper>
            )
        } else if (this.state.onBreak && !this.state.congratulations) {
            return (
                <Wrapper>
                    <Breather onClick={this.handleClick}></Breather>
                    <Statement break={this.state.onBreak} />
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    <Working onClick={this.handleClick}></Working>
                    <Statement break={this.state.onBreak} />
                </Wrapper>
            )
        }
    }
}

export default Breathe;