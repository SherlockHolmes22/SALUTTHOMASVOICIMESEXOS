const assert = require('assert');
let test = split("salut, toi, d'abor", ",");
assert.deepEqual(test, ['salut', ' toi', " d'abor"]);
console.log(test);

function split(str, sep) {
    str += sep;
    let list = [];
    let lastCut = 0;
    for (let i = 0; i < str.length; i++) {
        if (sep === "") {
            list.push(str[i])
        } else if (str[i] === sep[0]) {
            for (let j = i; j - i < sep.length; j++) {
                if (str[j] !== sep[j - i]) break;
                else if (j - i === sep.length - 1) {
                    list.push(str.slice(lastCut, i));
                    i += sep.length;
                    lastCut = i;
                }
            }
        }
    }
    return list;
}