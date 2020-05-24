import React, { useState } from 'react';
import styled from 'styled-components';

const Cell = props => {
    const [alive, setAlive] = useState(props.alive)
    const cellStyle = {
        backgroundColor: alive ? 'green' : undefined
    }
    const handleClick = () => {
        setAlive(!alive);
    }
    return (
        <Container onClick={handleClick} style={cellStyle} ></Container>
    );
}

const Container = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid black;
    display: inline-block;
`

export default Cell;