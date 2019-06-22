function charCount(str) {
    var obj = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }

    return obj;
}

console.log(charCount("Hello, hi, blah hello"))