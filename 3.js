var lengthOfLongestSubstring = function (s) {
    let set = new Set(), left = 0, res = 0
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left += 1
        }
        set.add(s[right])
        res = Math.max(res, set.size)
    }
    return res
};