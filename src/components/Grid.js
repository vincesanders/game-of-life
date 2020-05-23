import React, { useState } from 'react';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';

const Grid = () => {
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(50);
    const [grid, setGrid] = useState(createGrid(rows, columns));
    return (
        <Container>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            return (cell);
                        })}
                    </div>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
    div {
        display: flex;
        justify-content: center;
    }
`

export default Grid;