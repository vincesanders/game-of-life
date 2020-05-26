import { setGrid } from '../state/actions';
import { store } from '../index';
const startLife = (dispatch) => {
    const bool = store.getState().isSimulating;
    const speed = store.getState().speed;
    const rows = store.getState().rows;
    const cols = store.getState().columns
    const grid = store.getState().grid;
    if (!bool) {
        return;
    }
    const gridCopy = JSON.parse(JSON.stringify(grid));
    //make necessary changes to grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let neighbors = 0;
            for (let i = -1; i < 2; i++) {
                //loop through neighbors
                for (let j = -1; j < 2; j++) {
                    let newR = r + i;
                    let newC = c + j;
                    //skip self
                    if (i === 0 && j === 0) {
                        continue;
                    } else {
                        //wrap around if i and j are out of bounds
                        if (newR < 0) {
                            newR = rows + newR; //the last index of r
                        } else if (newR >= rows) {
                            newR = 0;
                        }
                        if (newC < 0) {
                            newC = cols + newC;
                        } else if (newC >= cols) {
                            newC = 0;
                        }
                    }
                    neighbors += grid[newR][newC];
                }
            }
            if (grid[r][c] === true && neighbors < 2 || neighbors > 3) {
            gridCopy[r][c] = false;
            } else if (grid[r][c] === false && neighbors === 3) {
            gridCopy[r][c] = true;
            }
        }
    }
    //send changes to state
    dispatch(setGrid(gridCopy));
    setTimeout(() => startLife(dispatch), speed);
}

export default startLife;