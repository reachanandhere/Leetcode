var maxSubArray = function(nums) {
    // let maxSum=-10000, sum=0
    // if(nums.length==1) return nums[0]
    // for(let i=0;i<nums.length;i++){
    //     sum+=nums[i]
    //     if(sum<0){
    //         if(i==nums.length-1 && Math.max(...nums)<0) return Math.max(...nums)
    //         sum=0
    //         continue
    //     } else if(sum>maxSum) maxSum=sum         
    // }
    
    // return maxSum
    let currentMax=nums[0], totalMax=nums[0]
    for(let i=1;i<nums.length;i++){
        currentMax=Math.max(nums[i], currentMax+nums[i])
        totalMax= Math.max(totalMax, currentMax)
    }
    return totalMax
};