// expensive function
// series: 0 1 1 2 3 5 8 13 21 43

function memoizedFiboncci() {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    console.log("Fresh Run", n);
    if (n <= 0) return;
    if (n < 3) return n - 1;

    let a = 0;
    let b = 1;
    let c;

    for (i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    cache[n] = c;
    return c;
  };
}

const fn = memoizedFiboncci();

const el1 = fn(50);
const el2 = fn(20);
const el3 = fn(50);
const el4 = fn(20);

console.log(el1);
console.log(el2);
console.log(el3);
console.log(el4);
