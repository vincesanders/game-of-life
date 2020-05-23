import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const Dashboard = () => {
    return (
        <Container>
            <h1>The Game of Life</h1>
            <Grid />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default Dashboard;