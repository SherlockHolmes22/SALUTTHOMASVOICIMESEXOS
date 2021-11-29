function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let test1 = fibonacci(5);
console.log(test1);
let test2 = fibonacci(6);
console.log(test2);