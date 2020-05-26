const createGrid = (rows, cols) => {
    //TODO: more efficient data structure?
    const grid = []
    //O(n^2) TODO: more effecient creation method?
    for (let row = 0; row < rows; row++) {
        const currentRow = [];
        for (let col = 0; col < cols; col++) {
            currentRow.push(false)
        }
        grid.push(currentRow);
    }
    return grid;
}

export default createGrid;