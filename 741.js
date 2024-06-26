var cherryPickup = function (grid) {
    //We are making two people starting from the 0,0 print
    //There are four combination 
    //R1 C1 R2 C2
    //R1 C1 denotes row and column of person 1
    let n = grid.length
    let dp = new Array(n).fill(-1).map(() => {
        return new Array(n).fill(-1).map(() => {
            return new Array(n).fill(-1)
        })
    })

    return cp(0, 0, 0, grid, dp) == -Infinity ? 0 : cp(0, 0, 0, grid, dp)
};

function cp(R1, C1, R2, grid, dp) {
    let C2 = R1+C1-R2
    if (R1 >= grid.length ||
        R2 >= grid.length ||
        C1 >= grid[0].length ||
        C2 >= grid[0].length ||
        grid[R1][C1] == -1 ||
        grid[R2][C2] == -1) return -Infinity

    //when both reaches destination

    if (R1 == grid.length - 1 && C1 == grid[0].length - 1) return grid[R1][C1]

    if (dp[R1][C1][R2] != -1) return dp[R1][C1][R2]

    var cherries = 0
    if (R1 == R2 && C1 == C2) {
        cherries += grid[R1][C1]
    } else {
        cherries += grid[R1][C1] + grid[R2][C2]
    }

    let f1 = cp(R1, C1 + 1, R2,  grid, dp) // H H
    let f2 = cp(R1 + 1, C1, R2,  grid, dp) // V H
    let f3 = cp(R1 + 1, C1, R2 + 1, grid, dp) // V V
    let f4 = cp(R1, C1 + 1, R2 + 1,  grid, dp) // H V
    cherries += Math.max(Math.max(f1, f2), Math.max(f3, f4))
    dp[R1][C1][R2] = cherries
    return cherries
}
