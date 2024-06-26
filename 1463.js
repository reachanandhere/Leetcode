var cherryPickup = function(grid) {
    //memoization soution
      const m = grid.length;
      const n = grid[0].length;
      const dp = new Array(m).fill(-1).map(()=> new Array(n).fill(-1).map(()=>new Array(n).fill(-1)))

      function recursion(i, j1, j2) {
          // Check if out of bounds
          if (j1 < 0 || j1 >= n || j2 < 0 || j2 >= n) return -Infinity;

          // Base case: last row
          if (i === m - 1) {
              if (j1 === j2) return grid[i][j1];
              return grid[i][j1] + grid[i][j2];
          }

          // Check if the result is already computed
          if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];

          let result = 0;

          // Explore all possible moves for both robots
          for (let dj1 = -1; dj1 <= 1; dj1++) {
              for (let dj2 = -1; dj2 <= 1; dj2++) {
                  let value = 0;
                  if (j1 === j2) value = grid[i][j1];
                  else value = grid[i][j1] + grid[i][j2];

                  value+=recursion(i + 1, j1 + dj1, j2 + dj2);
                  result=Math.max(result, value)
              }
          }

          // Memoize the result
          dp[i][j1][j2] = result;
          return result;
      }

      return recursion(0, 0, n - 1);
};