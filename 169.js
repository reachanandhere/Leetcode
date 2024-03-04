var majorityElement = function(nums) {
    let c=-1, count = 0;
    for(let i=0; i< nums.length; i++){
        if (count==0) {
            c = nums[i]
            count++
        } else c == nums[i] ?  count++  : count--
    }
    return c
    
};