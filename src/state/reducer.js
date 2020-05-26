import createGrid from '../utils/createGrid';
import {
    SET_IS_SIMULATING,
    SET_ROWS,
    SET_COLUMNS,
    SET_GRID
} from './actions';

const initialState = {
    isSimulating: false,
    speed: 100, //update every x ms
    cellSize: 6, //size of cell square in pixels
    rows: 50,
    columns: 50,
    grid: createGrid(50, 50),
    generations: 0
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
                grid: [...action.payload],
                generations: ++state.generations
            }
        default:
            return state;
    }
}

export default reducer;