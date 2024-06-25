/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let sum = 1
    let n = ratings.length
    let i = 1
    while (i < n) {
        if (ratings[i] == ratings[i - 1]) {
            sum += 1
            i++
            continue
        }

        let peak = 1
        while (i < n && ratings[i] > ratings[i - 1]) {
            peak++
            sum += peak
            i++
        }

        let down = 1
        while (i < n && ratings[i] < ratings[i - 1]) {
            sum += down
            down++
            i++
        }

        if (down > peak) sum += down - peak
    }
    return sum
};