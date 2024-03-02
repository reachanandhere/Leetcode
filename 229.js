var majorityElement = function (nums) {
    let m = new Map(), res = []
    let maj = Math.floor(nums.length / 3) + 1
    for (let i = 0; i < nums.length; i++) {
        if (!m.get(nums[i])) m.set(nums[i], 1);
        else m.set(nums[i], m.get(nums[i]) + 1);

        if (m.get(nums[i]) == maj) res.push(nums[i])
    }
    return res
};

let nums = [3, 2, 3];
console.log(majorityElement(nums));
