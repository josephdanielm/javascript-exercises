const fibonacci = function(number) {
    number = Number(number);
    if (number < 0) {return "OOPS"};

    let fibArray = [1 , 1];

    while (fibArray.length < number) {
        fibArray.push((fibArray[fibArray.length - 1]) + (fibArray[fibArray.length - 2]));
    }

    return fibArray[fibArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
