
const pie = 3.14;

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    multiply
}



module.exports = {
    pie,
    add: (a, b)  => (a + b),
    multiply: (a, b) => (a * b)
}



exports.add = (a, b) => (a + b);
exports.multiply = (a, b) => (a * b);