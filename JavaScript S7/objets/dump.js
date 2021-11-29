function dump(obj) {
    let str = "{";
    for (const [key, value] of Object.entries(obj)) {
        str += key + ': ';
        if (typeof value === "string") {
            str += '"' + value + '", ';
        } else if (typeof value === "object") {
            str += '[' + value + '], ';
        } else str += value + ', ';
    }
    str = str.slice(0, str.length - 2);
    str += '}';
    return str;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
let test = dump(obj);
console.log(test);