var maxSubArrayLen = function(nums, k) {
    let m = new Map()
    let sum = 0
    let maxLen = 0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum==k) maxLen = Math.max(maxLen, i+1)
        let rem = sum-k
        if(m.has(rem)){
            let len=i-m.get(rem)
            maxLen=Math.max(maxLen, len)
        }
        
        if(!m.has(sum)) m.set(sum, i)

    }
    return maxLen
};


console.log(maxSubArrayLen([-2,-1,2,1], 1))