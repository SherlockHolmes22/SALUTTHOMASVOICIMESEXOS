const assert = require('assert');
let test = padLeft("0", "coucou", 8);
assert.deepEqual(test, "00coucou")
console.log(test);

function padLeft(char, str, quantity) {
    if (str.length < quantity) {
        while(str.length !== quantity) str = char + str;
    } else if (str.length > quantity) {
        str.slice(0, quantity);
    }
    return str;
}