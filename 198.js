function f(nums, n, dp) {

    if (n == 0) return nums[n]
    if (n < 0) return 0
    if(dp[n]!=-1) return dp[n]
    let pick = nums[n] + f(nums, n - 2, dp)
    let nonPick = 0 + f(nums, n - 1, dp)
    return dp[n] = Math.max(pick, nonPick)

}


var rob = function (nums) {
    let dp1 = []
    left = f(nums.slice(1), nums.length - 1, dp1)
    let dp2 = []
    right = f(nums.slice(0,nums.length-1), nums.length - 1, dp2)
    return Math.max(left, right)
};