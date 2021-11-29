const assert = require('assert');
let test = contains("je suis une brebis", "bre");
assert.deepEqual(test, 12);
console.log(test);

function contains(haystack, needle, start) {
    for (let i = start === undefined ? 0 : start; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = i; j - i < needle.length; j++) {
                if (haystack[j] !== needle[j - i]) break;
                else if (j - i === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
}