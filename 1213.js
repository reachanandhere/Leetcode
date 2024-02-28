var arraysIntersection = function (arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0, res = []
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            res.push(arr1[i])
            i++
            j++
            k++
        } else if (arr1[i] < arr2[j]) i++
        else if (arr2[j] < arr3[k]) j++
        else k++
    }
    return res
};