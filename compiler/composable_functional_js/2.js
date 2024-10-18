const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        toString: () => `Box(${x})`
    })

// const moneyToFloat = str => 
//    parseFloat(str.replace(/\$/g,''))

const moneyToFloat = str => 
    Box(str)
    .map(s => s.replace(/\$/g,''))
    .map(r => parseFloat(r))

// const percentToFloat = str => {
//    const replaced = str.replace(/\%/g,'')
//    const number = parseFloat(replaced)
//    return number * 0.01
// }

const percentToFloat = str => 
    Box(str)
    .map(s => s.replace(/\%/g,''))
    .map(r => parseFloat(r))
    .map(f => f * 0.01)

// const applyDiscount = (price, discount) => {
//    const cost = moneyToFloat(price)
//    const savings = percentToFloat(discount)
//    return cost - cost * savings
// }

const applyDiscount = (price, discount) => 
    moneyToFloat(price)
    .fold(cost => 
        percentToFloat(discount)
        .fold(savings =>
            cost - cost * savings))

const result = applyDiscount('$5.00', '20%')
console.log(result)

