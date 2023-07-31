const sumAll = function(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !==
     'number' || numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }

    let first = numOne
    ,   second = numTwo;

    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }

    let total = 0;

    for (i = first; i <= second; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
