const removeFromArray = function(firstArray, ...theArgs) {
    let array = firstArray
    ,    args = theArgs;

    for (x of args) {
        array = array.filter(element => element !== x);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
