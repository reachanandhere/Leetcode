var maxArea = function (height) {
    let result = 0, left = 0, right = height.length - 1, area = 1
    while (left < right) {
        area = (right - left) * Math.min(height[left], height[right])
        result = Math.max(result, area)
        if (height[left] < height[right]) left++
        else if (height[left] > height[right]) right--
        else left++
    }
    return result
};