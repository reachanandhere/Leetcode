/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    let rows = board.length
    let cols = board[0].length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let neighbor = countNeighbors(r, c, board)
            if (board[r][c]) {
                if (neighbor == 2 || neighbor == 3) board[r][c] = 3         
            } else if (neighbor == 3) board[r][c] = 2
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] == 1) board[r][c] = 0
            else if (board[r][c] == 2 || board[r][c] == 3) board[r][c] = 1
        }
    }
};

function countNeighbors(i, j, board) {
    let count = 0;
    for (let m = -1; m <= 1; m++) {
        for (let n = -1; n <= 1; n++) {
            const neighbourRow = i + m;
            const neighbourColumn = j + n;

            if (neighbourRow >= 0 && neighbourColumn >= 0 && neighbourRow <= board.length - 1 && neighbourColumn <= board[0].length - 1) {
                const value = board[neighbourRow][neighbourColumn];
                if (i === neighbourRow && j === neighbourColumn)  continue;
     
                else if (value === 1 || value === 3) count++
                
            }

        }
    }
    
    return count;
}
