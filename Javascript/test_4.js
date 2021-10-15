const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 == 0;
}

const filterArray = (arrayTofFilter, filterFn) => {
    const filterArray = [];

    arrayTofFilter.forEach(num => {
        if (filterFn(num)) {
            filterArray.push(num);
        }
    });
    return filterArray;
}

console.log(filterArray(mixedArray, isEven));