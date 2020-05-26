import createGrid from '../utils/createGrid';
import {
    SET_IS_SIMULATING,
    SET_ROWS,
    SET_COLUMNS,
    SET_GRID
} from './actions';

const initialState = {
    isSimulating: false,
    speed: 300, //update every x ms
    rows: 50,
    columns: 50,
    grid: createGrid(50, 50)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SIMULATING:
            return {
                ...state,
                isSimulating: action.payload
            }
        case SET_ROWS:
            return {
                ...state,
                rows: action.payload
            }
        case SET_COLUMNS:
            return {
                ...state,
                columns: action.payload
            }
        case SET_GRID:
            return {
                ...state,
                grid: [...action.payload]
            }
        default:
            return state;
    }
}

export default reducer;