var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set(),
            colSet = new Set(),
            boxSet = new Set();

        for (let j = 0; j < 9; j++) {
            let rowElement = board[i][j];
            let colElement = board[j][i];
            let boxElement = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

            if (rowElement != '.') {
                if (rowSet.has(rowElement)) return false;
                rowSet.add(rowElement);
            }
            if (colElement != '.') {
                if (colSet.has(colElement)) return false;
                colSet.add(colElement);
            }

            if (boxElement != '.') {
                if (boxSet.has(boxElement)) return false;
                boxSet.add(boxElement);
            }
        }
        rowSet.clear()
        colSet.clear()
        boxSet.clear()

    }
    return true
};