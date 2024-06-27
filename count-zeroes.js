function findFirstZero(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((high + low) / 2);

        // arr all zeros or found first zero on first try
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return findFirstZero(arr, mid + 1, high);
        } else {
            return findFirstZero(arr, low, mid - 1);
        }
    }
    // empty arr or all ones
    return -1;
}

function countZeroes(arr) {
    let firstZero = findFirstZero(arr);
    if (firstZero === -1) {
        return 0;
    } else {
        return arr.length - firstZero;
    }
}

module.exports = countZeroes;
