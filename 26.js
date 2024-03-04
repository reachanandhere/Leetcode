var removeDuplicates = function(nums) {
    let  count = 0
    if(nums.length==1) return nums
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]) continue
        else nums[count++]=nums[i]
    }
    return count       
};