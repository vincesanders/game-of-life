import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setGrid } from '../state/actions';

const Grid = () => {
    const grid = useSelector(state => state.grid);
    const dispatch = useDispatch();

    const handleCellClick = (row, column) => {
        grid[row][column] = !grid[row][column];
        dispatch(setGrid(grid));
    }

    return (
        <Container>
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