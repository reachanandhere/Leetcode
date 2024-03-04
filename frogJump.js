// function f(n, arr, dp) {
//   if (n == 0) return 0;
//   if (dp[n]) return dp[n];
//   let left = f(n - 1, arr, dp) + Math.abs(arr[n] - arr[n - 1]);
//   let right = 0;
//   if (n > 1) {
//     right = f(n - 2, arr, dp) + Math.abs(arr[n] - arr[n - 2]);
//   }
//   return (dp[n] = Math.min(left, right));
// }

// function frogJump(n, arr) {
//   let dp = {};
//   return f(n, arr, dp);
// }

// console.log(frogJump(5, [30, 10, 60, 10, 60, 50]));

//For K Possible Jumps

function f(n, arr, dp, k) {
  if (n == 0) return 0;
  let minimumSteps=100000
  if (dp[n]) return dp[n];

  for (j = 1; j <= k; j++) {
    if (n - j >= 0) {
      let jump = f(n - j, arr, dp, k) + Math.abs(arr[n] - arr[n - j]);
      minimumSteps=Math.min(minimumSteps, jump)  
    }
  }
  dp[n]=minimumSteps
  return dp[n];
}

function frogJump(n, arr, k) {
  let dp = {};
  return f(n, arr, dp, k);
}

console.log(frogJump(5, [30, 10, 60, 10, 60, 50], 4));
