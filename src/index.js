module.exports = function reverse(n) {
    return +n.toString().split('').filter(i => i !== '-').reverse().join('')
}
