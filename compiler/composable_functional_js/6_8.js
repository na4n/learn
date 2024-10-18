//const res = "a".concat("b").concat("c")
//const resu = [1,2].concat([3,4])

const Sum = x => 
({
    x,
    concat: ({x: y}) => 
        Sum(x + y),
    inspect: () => `Sum(${x})`
})

//const res = Sum(1).concat(Sum(2))

const All = x => 
    ({
        x,
        concat: ({x: y}) =>
            All(x && y),
        inspect: () => 
            `All(${x})`
    })

const First = x => 
    ({
        x,
        concat: _ => 
            First(x),
        inspect: () => 
            `First(${x})`
    })

const acct1 = { name: First('Nico'), isPaid: All(true), points: Sum(10), friends: ['Franklin']}

const acct2 = { name: First('Nico'), isPaid: All(false), points: Sum(2), friends: ['Gatsby'] }

// monoid, semigroup with identity element
// 1 + 0 = 1
// 2 + 0 = 2
// x + 0 = x

Sum.empty = () => Sum(0)

All.empty = () => All(true)
// true && false = false
// true && true = true
// false && true = false

//First is not a monoid since First(?).concat(First(something)) is First(?) not identity

const sum = xs => 
    xs.reduce((acc, x) => acc + x, 0)

