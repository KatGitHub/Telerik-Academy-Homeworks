//Problem 1. Write a script that prints all the numbers from 1 to N.

var start = 1;
var end = 15;

console.log('Problem 1 output:');
printNumbers(start, end);

function printNumbers(start, end) {
    for (var i = start; i <= end; i += 1) {
        console.log(i);
    }
}
//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time

console.log('Problem 2 output:');
printNumbersNotDivisible(start, end);

function printNumbersNotDivisible(start, end) {
    for (var i = start; i <= end; i += 1) {
        if ((i % 3) && (i % 7)) {
            console.log(i);
        }
    }
}

//Write a script that finds the max and min number from a sequence of numbers.

var arr = [5, 7, 22, -4, 21, 8];
console.log('Problem 3 output:');
returnMaxAndMin(arr);

function returnMaxAndMin(arr) {
    var maxNumber = arr[0];
    var minNumber = arr[0];
    for (var i = 1; i < arr.length; i += 1) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
    console.log('max number: ' + maxNumber);
    console.log('min number: ' + minNumber);
}

//Write a script that finds the lexicographically smallest and largest property
// in document, window and navigator objects.

console.log('Problem 4 output:');
console.log('document:');
returnMaxAndMinProperties(document);
console.log('navigator:');
returnMaxAndMinProperties(navigator);
console.log('window:');
returnMaxAndMinProperties(window);

function returnMaxAndMinProperties(obj) {
    var maxProp = 0;
    var minProp = 0;
    for (var prop in obj) {
        while (!maxProp && !minProp) {
            maxProp = prop;
            minProp = prop;
        }
        if (prop > maxProp) {
            maxProp = prop;
        }
        if (prop < minProp) {
            minProp = prop;
        }
    }
    console.log('max property ' + maxProp);
    console.log('min property ' + minProp);
}