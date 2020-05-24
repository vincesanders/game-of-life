import React, { useState, useCallback, useRef, useEffect } from 'react';
import produce from 'immer';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';
// import Cell from './Cell';

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

// const Grid = ({ grid, setGrid, rows, columns }) => {
const Grid = () => {
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(50);
    const [grid, setGrid] = useState(() => {
        const matrix = [];
        for (let row = 0; row < rows; row++) {
            const currentRow = [];
            for (let col = 0; col < columns; col++) {
                currentRow.push(false)
            }
            matrix.push(currentRow);
        }
        return matrix;
    });
    const [simulating, setSimulating] = useState(false);

    const simulation = useRef(simulating);
    simulation.current = simulating;

    const startLife = useCallback(() => {
        if (!simulation.current) {
            return;
        }
        setGrid(grid => {
            return produce(grid, gridCopy => {
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < columns; c++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                        const newR = r + x;
                        const newC = c + y;
                        if (newR >= 0 && newR < rows && newC >= 0 && newC < columns) {
                            //true will evaluate to 1, false to 0
                            neighbors += grid[newR][newC];
                        }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                        gridCopy[r][c] = 0;
                        } else if (grid[r][c] === 0 && neighbors === 3) {
                        gridCopy[r][c] = 1;
                        }
                    }
                }
            });
        });
        console.log('startLife called')
        setTimeout(startLife, 1000);
    }, []);

    const handleClick = e => {
        setSimulating(!simulating);
        if (!simulating) {
            simulation.current = true;
            startLife();
        }
    }

    const handleCellClick = (row, column) => {
        setGrid(produce(grid, gridCopy => {
            gridCopy[row][column] = !grid[row][column];
        }))
    }

    return (
        <Container>
            <button onClick={handleClick}>start</button>
            {grid ? grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((alive, colIndex) => {
                            const cellStyle = {
                                backgroundColor: alive ? 'green' : undefined
                            }
                            return <Cell key={`${rowIndex}-${colIndex}`} onClick={() => handleCellClick(rowIndex, colIndex)} style={cellStyle}/>;
                        })}
                    </div>
                );
            }) : <h2>There's been a problem rendering the grid.</h2>}
        </Container>
    );
}

const Container = styled.div`
    div {
        display: flex;
        justify-content: center;
    }
`

const Cell = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid black;
    display: inline-block;
`

export default Grid;