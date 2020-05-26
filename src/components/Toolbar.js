import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSimulating, setSpeed, setGrid, resetGenerations } from '../state/actions';
import startLife from '../utils/startLife';
import randomizeGrid from '../utils/randomizeGrid';
import createGrid from '../utils/createGrid';

const Toolbar = () => {
    const isSimulating = useSelector(state => state.isSimulating);
    const speedFromState = useSelector(state => state.speed);
    const rows = useSelector(state => state.rows);
    const columns = useSelector(state => state.columns);
    const dispatch = useDispatch();
    const [speed, setSpeedValue] = useState(speedFromState);

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
        }
    }

    const handleSpeedChange = e => {
        setSpeedValue(e.target.value);
    }

    const handleSpeedSubmit = e => {
        e.preventDefault();
        dispatch(setSpeed(speed));
    }

    return (
        <div>
            <button onClick={() => handleClick('start')}>{isSimulating ? 'Stop' : 'Start'}</button>
            <button onClick={() => handleClick('randomize')}>Randomize</button>
            <button onClick={() => handleClick('clear')}>Clear</button>
            <button onClick={() => handleClick('reset')}>Reset Generations</button>
            <form onSubmit={handleSpeedSubmit} >
                <input type='number' min='50' max='1000' value={speed} onChange={handleSpeedChange} />
                <button type='submit' >submit</button>
            </form>
    <p>speed: {speed}</p>
        </div>
    );
}

export default Toolbar;