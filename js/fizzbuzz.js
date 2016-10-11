function FizzBuzz(n) {
    var fizzbuzz = ''
    for (var i = 1; i <= n; i++) {

        // For every number that is a multiple of 3 and 5, return 'fizzbuzz'
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzz += 'fizzbuzz'
        }
        // For every number that is a multiple of 3 (but not 5), return 'fizz'
        else if (i % 3 === 0) {
            fizzbuzz += 'fizz'
        }
        // For every number that is a multiple of 5 (but not 3), return 'buzz'
        else if (i % 5 === 0) {
            fizzbuzz += 'buzz'
        }
        // For every number that isn't a multiple of 3 or 5, return a period '.'
        else {
            fizzbuzz += '.'
        }
    }
    return fizzbuzz
}
console.log(FizzBuzz(99))
console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
