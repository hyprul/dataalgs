function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//multiple pointers
function averagePair(sortedArray, avg) {
    // add whatever parameters you deem necessary - good luck!

}

function averagePair(sortedArray, avg) {
    // add whatever parameters you deem necessary - good luck!
    if (sortedArray.length < 2) {
        return false
    }
    let left = 0;
    let right = sortedArray.length - 1

    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right]
        let average = sum / 2
        if (average === avg) {
            return true
        } else if (average < avg) {
            left++
        } else {
            right--
        }
    }

    return false
}