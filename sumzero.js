function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[rigtht]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left--;
        }
    }
}

//multiple pointers
function averagePair(sortedArray, avg){
    // add whatever parameters you deem necessary - good luck!
    
  }