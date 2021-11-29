const assert = require('assert');
let test = padRight("0", "coucou", 8);
assert.deepEqual(test, 'coucou00');
console.log(test);

function padRight(char, str, quantity) {
    if (str.length < quantity) {
        while(str.length !== quantity) str = str + char;
    } else if (str.length > quantity) {
        str.slice(0, quantity);
    }
    return str;
}