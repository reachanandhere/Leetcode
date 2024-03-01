var merge = (nums, low, mid, high) => {
    let counter = 0
    let j = mid + 1
    for (let i = low; i <= mid; i++) {
        while (j <= high && nums[i] > (2 * nums[j])) j++
        counter += (j - (mid + 1))
    }

    let temp = []
    let left = low, right = mid + 1
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) temp.push(nums[left++])
        else temp.push(nums[right++])
    }

    while (left <= mid) temp.push(nums[left++])
    while (right <= high) temp.push(nums[right++])
    for(let i=low;i<=high;i++){
        nums[i]=temp[i-low]
    }
    return counter
}


var mergeSort = (nums, low, high) => {
    if (low >= high) return 0
    let mid = Math.floor((low + high) / 2)
    let res = mergeSort(nums, low, mid)
    res += mergeSort(nums, mid + 1, high)
    res += merge(nums, low, mid, high)
    return res
}

var reversePairs = function (nums) {
    return mergeSort(nums, 0, nums.length - 1)
};

console.log(reversePairs([1,3,2,3,1]))