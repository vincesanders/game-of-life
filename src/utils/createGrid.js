import Cell from '../components/Cell';

const createGrid = () => {
    //TODO: more efficient data structure?
    const grid = []
    //O(n^2) TODO: more effecient creation method?
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            currentRow.push(<Cell />)
        }
        grid.push(currentRow);
    }
    return grid;
}

export default createGrid;