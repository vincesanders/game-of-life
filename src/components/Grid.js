import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setIsSimulating, setGrid } from '../state/actions';
import startLife from '../utils/startLife';

const Grid = () => {
    const isSimulating = useSelector(state => state.isSimulating);
    const grid = useSelector(state => state.grid);
    const dispatch = useDispatch();
    
    const simulation = useRef(isSimulating);
    simulation.current = isSimulating;

    const handleClick = e => {
        dispatch(setIsSimulating(!isSimulating));
        if (!isSimulating) {
            simulation.current = true;
            startLife(dispatch);
        }
    }

    const handleCellClick = (row, column) => {
        grid[row][column] = !grid[row][column];
        dispatch(setGrid(grid));
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