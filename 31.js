var nextPermutation = function (nums) {
    let index = -1
    //finding the index, starting from right where left element is smaller than right element and setting index
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            index = i-1
            break
        }
    }

    //if index is not set, that means all the elements are sorted from left to right, then return the first permutation   
    if (index == -1) {
        nums.reverse()
        return nums
    }

    //starting from right, choose the first index where element is greated than the index element and swap+break
    for (let i = nums.length - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            break
        }
    }
    //starting from index+1 to end, reverse all elements
    rev(nums, index + 1, nums.length - 1)
    return nums
};
var rev = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}