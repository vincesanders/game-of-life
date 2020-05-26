import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSimulating, setGrid, resetGenerations } from '../state/actions';
import startLife from '../utils/startLife';
import randomizeGrid from '../utils/randomizeGrid';
import createGrid from '../utils/createGrid';

const Toolbar = () => {
    const isSimulating = useSelector(state => state.isSimulating);
    const rows = useSelector(state => state.rows);
    const columns = useSelector(state => state.columns);
    const dispatch = useDispatch();

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

    return (
        <div>
            <button onClick={() => handleClick('start')}>{isSimulating ? 'Stop' : 'Start'}</button>
            <button onClick={() => handleClick('randomize')}>Randomize</button>
            <button onClick={() => handleClick('clear')}>Clear</button>
            <button onClick={() => handleClick('reset')}>Reset Generations</button>
        </div>
    );
}

export default Toolbar;