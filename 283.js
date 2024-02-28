var moveZeroes = function(nums) {
    if(nums.length==1) return nums
    let j=-1
    for(let i = 0;i<nums.length;i++) {
        if(nums[i]==0) {
            j=i
            break
        }
    }
    if(j==-1) return nums

    for(let i=j+1;i<nums.length;i++){
        if(nums[i]!=0) {
            [nums[i],nums[j]]=[nums[j],nums[i]]
            j++
        }
    }
};