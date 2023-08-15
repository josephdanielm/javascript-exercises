const findTheOldest = function(people) {
    let age
    ,   oldestAge = 0
    ,   indexOfOldestPerson;
    for (person of people) {
        if ('yearOfDeath' in person) {
            person.age = (person.yearOfDeath - person.yearOfBirth);
        } else {
            const today = new Date();
            person.age = (today.getFullYear() - person.yearOfBirth);
        }

        if (person.age > oldestAge) {oldestAge = person.age;}
    }

    return (people.find(person => person.age === oldestAge));
};

// Do not edit below this line
module.exports = findTheOldest;
