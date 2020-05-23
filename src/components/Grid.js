import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';

const Grid = () => {
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(50);
    const [grid, setGrid] = useState(createGrid(rows, columns));
    const [simulating, setSimulating] = useState(false);

    const simulation = useRef(simulating);
    simulation.current = simulating;

    const startLife = useCallback(() => {
        if (!simulation.current) {
            return;
        }
        setGrid(() => {
            for (let r = 0; r < rs; r++) {
                for (let c = 0; c < columns; c++) {
                    const cell = grid[r][c];
                    const top = grid[r - 1][c].props.alive;
                    const bottom = grid[r + 1][c].props.alive;
                    const left = grid[r][c - 1].props.alive;
                    const right = grid[r][c + 1].props.alive;
                    //when added to a number, true will evaluate to 1, false to 0
                    const neighbors = 0 + top + bottom + left + right;
                    if (cell.props.alive) { //cell is alive
                        if (neighbors < 2 || neighbors > 3) {
                            cell.props.alive = false;
                        }
                    } else { //cell is dead
                        if (neighbors === 3) {
                            cell.props.alive = true;
                        }
                    }
                }
            }
        });
        setTimeout(startLife, 1000);
    }, []);
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