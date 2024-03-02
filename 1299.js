var replaceElements = function(arr) {
    let currentMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        if (currentMax > arr[i]) {
            arr[i] = currentMax;
        } else {
            const temp = currentMax;
            currentMax = arr[i];
            arr[i] = temp;
        }
    }
    
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]))