import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSimulating, setSpeed, setRows, setColumns, setGrid, resetGenerations } from '../state/actions';
import startLife from '../utils/startLife';
import randomizeGrid from '../utils/randomizeGrid';
import createGrid from '../utils/createGrid';

const Toolbar = () => {
    const isSimulating = useSelector(state => state.isSimulating);
    const speed = useSelector(state => state.speed);
    const rows = useSelector(state => state.rows);
    const columns = useSelector(state => state.columns);
    const dispatch = useDispatch();
    const [speedValue, setSpeedValue] = useState(speed);
    const [rowsValue, setRowsValue] = useState(rows);
    const [colsValue, setColsValue] = useState(columns);

    const handleClick = button => {
        switch (button) {
            case 'start':
                dispatch(setIsSimulating(!isSimulating));
                if (!isSimulating) {
                    startLife(dispatch);
                }
                break;
            case 'randomize':
                randomizeGrid();
                break;
            case 'clear':
                dispatch(setGrid(createGrid(rows, columns)));
                dispatch(resetGenerations());
                break;
            case 'reset':
                dispatch(resetGenerations());
                break;
            default:
                break;
        }
    }

    const handleSpeedChange = e => {
        setSpeedValue(e.target.value);
    }

    const handleSpeedSubmit = e => {
        e.preventDefault();
        dispatch(setSpeed(speedValue));
    }

    const handleRowsChange = e => {
        setRowsValue(e.target.value);
    }

    const handleRowsSubmit = e => {
        e.preventDefault();
        dispatch(setRows(rowsValue));
    }

    const handleColsChange = e => {
        setColsValue(e.target.value);
    }

    const handleColsSubmit = e => {
        e.preventDefault();
        dispatch(setColumns(colsValue));
    }

    return (
        <div>
            <button onClick={() => handleClick('start')}>{isSimulating ? 'Stop' : 'Start'}</button>
            <button onClick={() => handleClick('randomize')}>Randomize</button>
            <button onClick={() => handleClick('clear')}>Clear</button>
            <button onClick={() => handleClick('reset')}>Reset Generations</button>
            <form onSubmit={handleSpeedSubmit} >
                <input type='number' min='50' max='1000' value={speedValue} onChange={handleSpeedChange} />
                <button type='submit' >submit</button>
            </form>
            <form onSubmit={handleRowsSubmit} >
                <input type='number' min='3' max='1000' value={rowsValue} onChange={handleRowsChange} />
                <button type='submit' >submit</button>
            </form>
            <form onSubmit={handleColsSubmit} >
                <input type='number' min='3' max='1000' value={colsValue} onChange={handleColsChange} />
                <button type='submit' >submit</button>
            </form>
        </div>
    );
}

export default Toolbar;