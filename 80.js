var removeDupII=(nums)=>{
    let c=0; 
    for(let i=0 ; i<nums.length ; i++) if(nums[i] !== nums[i+2]) nums[c++] = nums[i];
    return nums;
}

console.log(removeDupII([1,1,1,2,2,3]));