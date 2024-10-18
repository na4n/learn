//const nextCharForNumberString = str => {
//    const trimmed = str.trim();
//    const number = parseInt(trimmed);
//    const nextNumber = number + 1;
//    return String.fromCharCode(nextNumber);
//}

//const nextCharForNumberString = str => String.fromCharCode(parseInt(str.trim())+1);

const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        toString: () => `Box(${x})`
    })

const nextCharForNumberString = str => 
    Box(str)
    .map(s => s.trim())
    .map(r => parseInt(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(i => i)

const result = nextCharForNumberString('  64  ');
console.log(result);
