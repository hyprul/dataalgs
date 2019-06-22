function anagram(str1, str2) {
    let str1arr = str1.split('')
    let str2arr = str2.split('')

    let str1freq = {}
    let str2freq = {}

    if (str1arr.length !== str2arr.length) {
        return false;
    }

    for (let val of str1arr) {
        str1freq[val] = (str1freq[val] || 0) + 1
    }

    for (let val of str2arr) {
        str2freq[val] = (str2freq[val] || 0) + 1
    }

    for (let key in str1freq) {
        if (!key in str2freq) {
            return false
        }
        if (str2freq[key] !== str1freq[key]) {
            return false
        }
    }

    return true

}