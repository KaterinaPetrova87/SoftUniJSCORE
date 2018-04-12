function fibonacci() {
    let f0 = 0;
    let f1 = 1;
    return function () {
        let fNext = f0 + f1;
        f0 = f1;
        f1 = fNext;
        return f0;
    }
}

let fib = fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());