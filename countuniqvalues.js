function countUnique(arr) {
    let begin = 0;
    let next = 1;
    let count = 1;
    if (arr.length === 0) {
        return 0;
    }
    while (next < arr.length) {
        if (arr[next] !== arr[begin]) {
            count++;
            begin = next;
            next++;
        } else {
            next++;
        }
    }

    return count;
}