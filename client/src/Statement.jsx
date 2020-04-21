import React from 'react';
import styled, { keyframes } from 'styled-components';

const Quote = styled.div`
    font-size: 30px;
    postion: absolute;
`;

const breatheAnimation = keyframes`
    0% { opacity: 1 }
    40% { opacity: 0.5 }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
`;

const BreathingQuote = styled(Quote)`
    animation: ${breatheAnimation} 8s infinite;
`;


function Statement(props) {
    if (props.break) {
        return (
            <BreathingQuote>
                Breathing
            </BreathingQuote>
        )
    } else {
        return (
            <Quote>
                Let's Breathe
            </Quote>
        )
    }
}

export default Statement;