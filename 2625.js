const flatten = (nested, n) => {
    const flat = [];
  
    const handleFlat = (array, k) => {
      let counter = 0,
        temp = 0;
      while (counter < array.length) {
        const val = array[counter];
        if (Array.isArray(val) && k < n) {
          handleFlat(val, k + 1);
        } else {
          flat.push(val);
        }
        counter++;
      }
    };
    handleFlat(nested, 0);
    return flat;
  };
  
  let a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
  console.log(flatten(a, 1));
  