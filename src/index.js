module.exports = function reverse (n) {
    n = n + ''
    const numR = n.split('').reverse().join('');
    return parseInt(numR);
}
