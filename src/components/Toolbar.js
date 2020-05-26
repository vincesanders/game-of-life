import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSimulating } from '../state/actions';
import startLife from '../utils/startLife';
import randomizeGrid from '../utils/randomizeGrid';

const Toolbar = () => {
    const isSimulating = useSelector(state => state.isSimulating);
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
        }
    }
    return (
        <div>
            <button onClick={() => handleClick('start')}>{isSimulating ? 'Stop' : 'Start'}</button>
            <button onClick={() => handleClick('randomize')}>Randomize</button>
        </div>
    );
}

export default Toolbar;