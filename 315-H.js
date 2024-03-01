var countSmaller = function (nums) {
  if (nums == null || nums.length == 0) return []; // Base Cases
  let result = new Array(nums.length).fill(0); // ans array
  let idxArr = nums.map((num, index) => ({ num, index })); // idxarr store element value and its index
  mergeSort(idxArr, 0, nums.length - 1, result); // call mergeSort function
  return result; // return ans;
};

const mergeSort = (arr, start, end, result) => {
  if (start >= end) return;
  const mid = Math.floor(start + (end - start) / 2);
  mergeSort(arr, start, mid, result);
  mergeSort(arr, mid + 1, end, result);
  Merge(arr, start, mid, end, result);
};

const Merge = (arr, start, mid, end, result) => {
    let merge = [];
    let left = start;
    let right = mid + 1;
    let minCount = 0;
    while (left <= mid && right <= end) {
      if (arr[left].num <= arr[right].num) {
        result[arr[left].index] += minCount;
        merge.push(arr[left++]);
      } else {
        minCount++;
        merge.push(arr[right++]);
      }
    }
  
    while (left <= mid) {
      result[arr[left].index] += minCount;
      merge.push(arr[left++]);
    }
  
    while (right <= end) merge.push(arr[right++]);
     
    for (let i = start; i <= end; i++) arr[i] = merge[i - start]; 
};

console.log(countSmaller([5, 2, 6, 1]));
