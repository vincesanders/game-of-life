import React, { useState } from 'react';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';

const Grid = () => {
    const [grid, setGrid] = useState(createGrid());
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