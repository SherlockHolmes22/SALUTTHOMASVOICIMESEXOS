class EZArray extends Array {
    get first() { return this[0] }
    get last() { return this[this.length - 1] }
}

let a = new EZArray();
a instanceof EZArray  // => true: instance de EZArray
a instanceof Array    // => true: instance de Array aussi
a.push(1,2,3,4);      // a.length == 4; méthodes hérités
a.pop()               // => 4
a.first               // => 1: first getter
a.last                // => 3: last getter
a[1]                  // => 2: syntaxe habituelle d'accès aux élément du tableau
Array.isArray(a)      // => true
EZArray.isArray(a)    // => true