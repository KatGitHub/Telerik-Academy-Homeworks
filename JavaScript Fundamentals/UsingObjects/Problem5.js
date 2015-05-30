/*Problem 5.
 Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.*/

var people = [
    {firstName: 'Gosho', lastName: 'Petrov', age: 32},
    {firstName: 'Bay', lastName: 'Ivan', age: 81},
    {firstName: 'Georgiy', lastName: 'Georgiev', age: 4},
    {firstName: 'Ivan', lastName: 'Ivanov', age: 18}
];

function findYoungestPerson(people){
    var best = people[0];
    for (var i = 1, len = people.length; i < len; i += 1) {
        if(people[i].age < best.age){
            best = people[i];
        }
    }
    return best.firstName + ' ' + best.lastName;
}

console.log('Youngest person is: ' + findYoungestPerson(people));


