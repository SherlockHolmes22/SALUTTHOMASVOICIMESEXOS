const assert = require('assert');
function diff(obj1, obj2) {
    for (const item in obj2) delete obj1[item];
    return obj1;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let test = diff(o1, withoutOpacity);
console.log(test);
assert.deepEqual(test, { r: 0, g: 0, b: 0 });