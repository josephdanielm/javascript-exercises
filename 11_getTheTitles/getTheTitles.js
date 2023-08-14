const getTheTitles = function(books) {
    let titlesArray = [];
    books.forEach(function(book) {
        titlesArray.push(book.title);
    })
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
