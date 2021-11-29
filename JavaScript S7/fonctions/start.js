const assert = require('assert');
let test = startWith("Je suis un test", "suis");
assert.deepEqual(test, true)
console.log(test);


function startWith(str, find, start) {
    for (let i = start === undefined ? 0 : start; i < find.length; i++) {
        if (str[i] !== find[i]) return false;
    }
    return true;
}