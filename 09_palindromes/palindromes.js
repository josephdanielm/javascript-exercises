const palindromes = function (string) {

    let stringInput = Array.from(string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()); // Regex to remove non-letters and spaces

    let stringReverse = [...stringInput].reverse();
    let isPalindrome = true;

    console.log(stringInput, stringReverse);

    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] !== stringReverse[i]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
