import React, { useState, useCallback, useRef, useEffect } from 'react';
import produce from 'immer';
import styled from 'styled-components';
import createGrid from '../utils/createGrid';

const Grid = () => {
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(50);
    const [grid, setGrid] = useState(() => {
        return createGrid(rows, columns);
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
                        for (let i = -1; i < 2; i++) {
                            //loop through neighbors
                            for (let j = -1; j < 2; j++) {
                                let newR = r + i;
                                let newC = c + j;
                                //skip self
                                if (i === 0 && j === 0) {
                                    continue;
                                } else {
                                    //wrap around if i and j are out of bounds
                                    if (newR < 0) {
                                        newR = rows + newR; //the last index of r
                                    } else if (newR >= rows) {
                                        newR = 0;
                                    }
                                    if (newC < 0) {
                                        newC = columns + newC;
                                    } else if (newC >= columns) {
                                        newC = 0;
                                    }
                                }
                                neighbors += grid[newR][newC];
                            }
                        }
                        if (grid[r][c] === true && neighbors < 2 || neighbors > 3) {
                        gridCopy[r][c] = false;
                        } else if (grid[r][c] === false && neighbors === 3) {
                        gridCopy[r][c] = true;
                        }
                    }
                }
            });
        });
        console.log('startLife called')
        setTimeout(startLife, 300);
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