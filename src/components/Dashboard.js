import React from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import Grid from './Grid';
import Footer from './Footer';

const Dashboard = () => {
    return (
        <Container>
            <h1>The Game of Life</h1>
            <Toolbar />
            <Grid />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default Dashboard;