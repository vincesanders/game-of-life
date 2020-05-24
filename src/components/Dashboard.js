import React, { useState } from 'react';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';
import Grid from './Grid';

const Dashboard = () => {
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(50);
    const [grid, setGrid] = useState(createGrid(rows, columns));
    return (
        <Container>
            <h1>The Game of Life</h1>
            <Grid grid={grid} setGrid={setGrid} rows={rows} columns={columns} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default Dashboard;