import React from 'react';
import styled from 'styled-components';

const Cell = () => {
    return (
        <Container></Container>
    );
}

const Container = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid black;
    display: inline-block;
`

export default Cell;