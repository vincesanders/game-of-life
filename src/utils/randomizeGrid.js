import { setGrid, resetGenerations } from '../state/actions';
import { store } from '../index';

const randomizeGrid = () => {
    const rows = store.getState().rows;
    const cols = store.getState().columns
    const density = 0.3; //How much of the grid should have live cells.
    const grid = []
    //O(n^2) TODO: more effecient creation method?
    for (let row = 0; row < rows; row++) {
        const currentRow = [];
        for (let col = 0; col < cols; col++) {
            if (Math.random() < density) {
                currentRow.push(true)
            } else {
                currentRow.push(false)
            }
        }
        grid.push(currentRow);
    }
    store.dispatch(setGrid(grid));
    store.dispatch(resetGenerations());
}

export default randomizeGrid;