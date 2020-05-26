export const SET_IS_SIMULATING = 'SET_IS_SIMULATING';
export const SET_ROWS = 'SET_ROWS';
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_GRID = 'SET_GRID';

export const setIsSimulating = bool => dispatch => {
    dispatch({ type: SET_IS_SIMULATING, payload: bool });
}

export const setRows = rows => dispatch => {
    dispatch({ type: SET_ROWS, payload: rows });
}

export const setColumns = cols => dispatch => {
    dispatch({ type: SET_COLUMNS, payload: cols });
}

export const setGrid = grid => dispatch => {
    dispatch({ type: SET_GRID, payload: grid });
}