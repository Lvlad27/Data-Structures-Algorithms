/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);

    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);

    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const lcm = (x, y) => (x * y) / gcd(x, y);
    return range.reduce((a, b) => lcm(a, b));
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
