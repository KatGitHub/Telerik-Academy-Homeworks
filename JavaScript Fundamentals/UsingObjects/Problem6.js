/*Problem 6.
 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)*/

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        toString: function () {
            return this.firstName + ' ' + this.lastName + ', ' + this.age + ' years old';
        }
    };
}

var people = [createPerson('Ivan', 'Petrov', 32),
    createPerson('Ivan', 'Hristov', 40),
    createPerson('Ivan', 'Ivanov', 15),
    createPerson('Hristo', 'Petrov', 32),
    createPerson('Hristo', 'Hristov', 40),
    createPerson('Georgi', 'Georgiev', 10)
];

function group(people, criteria) {

    var groups = {};

    for (var i in people) {
        var key = people[i][criteria];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(people[i].toString());
    }

    return groups;
}

console.log('Grouped by first name:');
console.log(group(people, 'firstName'));
console.log('Grouped by second name:');
console.log(group(people, 'lastName'));
console.log('Grouped by age:');
console.log(group(people, 'age'));


