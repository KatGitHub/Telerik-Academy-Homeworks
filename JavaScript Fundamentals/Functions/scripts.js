//Problem 1. Write a function that returns the last digit of given integer as an English word.

var num = -1267;
console.log('Problem 1 output:');
console.log('test number: ' + num);
console.log(returnLastDigitAsWord(num));

function returnLastDigitAsWord(n) {
    return returnDigitAsWord(returnLastDigit(n));
}

function returnLastDigit(n) {
    checkIfNaN(n);
    return Math.abs(n % 10);
}

function returnDigitAsWord(n) {
    switch (+n) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return 'not a digit';
    }
}

//Problem 2. Write a function that reverses the digits of given decimal number.

num = -12.345;
console.log('Problem 2 output:');
console.log('test number: ' + num);
console.log(reverseDigits(num));

function reverseDigits(n) {
    checkIfNaN(n);
    var output = '';
    n = n.toString();
    for (var i = 0; i < n.length; i += 1) {
        if (n[0] === '-') {
            if (!i) {
                continue;
            } else if (i === n.length - 1) {
                output = '-' + n[i] + output;
                break;
            }
        }
        output = n[i] + output;
    }
    return output;
}

/*Problem 3. Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive. Use function overloading.*/

var text = 'Every function in JavaScript is a Function object. See Function for information on properties and methods' +
    ' of Function objects. Functions are not the same as procedures. A function always returns a value, ' +
    'but a procedure may or may not return any value.';
var word = 'function';
var wordsArr = ['function', 'JavaScript'];

console.log('Problem 3 output:');
console.log('test word: ' + word);
console.log(returnWordCount(text, word, false));
console.log('test array of words: ' + wordsArr);
console.log(returnWordCount(text, wordsArr, true));

function returnWordCount(text, word, isCaseSensitive) {
    var flag = '';
    if (isCaseSensitive) {
        flag = 'gm';
    } else {
        flag = 'gim';
    }
    var re;
    var output = '';

    switch (typeof arguments[1]) {
        case 'string':
            re = new RegExp('(\\b' + word + '\\b)', flag);
            output = word + ' ' + text.match(re).length;
            break;
        case 'object':
            for (var obj in word) {
                re = new RegExp('(\\b' + word[obj] + '\\b)', flag);
                output += word[obj] + ' ' + text.match(re).length + '\n';
            }
            break;
    }
    return output;
}

function checkIfNaN() {
    if (isNaN(arguments)) {
        return 'Not a number.';
    }
}

//Problem 4. Write a function to count the number of div elements on the web page.

console.log('Problem 4 output: ');
console.log('Number of <div> elements: ' + returnCountOfElement('div'));
console.log('Number of <p> elements: ' + returnCountOfElement('p'));

function returnCountOfElement(tag) {
    return document.getElementsByTagName(tag).length;
}

/*Problem 5. Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.*/

var arr = [3, 5, 6, 4, 3, 7, -3, 33];
var number = 3;
console.log('Problem 5 output: ');
console.log('test array and number: ' + arr + ' , ' + number);
console.log(returnNumberCount(arr, number));
console.log(testProblem5());

function returnNumberCount(array, n) {
    for (var i = 0, count = 0; i < array.length; i += 1) {
        if (array[i] === n) {
            count += 1;
        }
    }
    return count;
}

function testProblem5() {
    var testArr = [3, 5, 6, 4, 3, 7, -3, 33];
    var testNum = 3;
    var expectedOutput = 2;
    var output = returnNumberCount(testArr, testNum);
    if (output === expectedOutput) {
        return 'Ok';
    } else {
        return 'Wrong.';
    }
}

/*Problem 6. Write a function that checks if the element at given position in given array of integers is bigger
 than its two neighbours (when such exist).
 */

var position = 6;
console.log('Problem 6 output: ');
console.log('test array and position: ' + arr + ' , ' + position);
console.log(checkIfBiggerThanNeighbours(arr, position));

function checkIfBiggerThanNeighbours(arr, position) {
    if (position < 0 || position >= arr.length) {
        return 'Wrong index.';
    }
    if (position && (position !== arr.length - 1)) {
        return ((arr[position - 1] < arr[position]) &&
        (arr[position + 1] < arr[position]));
    } else {
        return 'Element has only one neighbour.';
    }
}

/*Problem 7. Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.*/

arr = [1, -2, -3, -14, -5, -13, 5, 3];
console.log('Problem 7 output: ');
console.log('test array: ' + arr);
console.log(returnIndexOfBiggerElement(arr));

function returnIndexOfBiggerElement(arr) {
    for (var i = 1, len = arr.length; i < len - 1; i += 1) {
        if (checkIfBiggerThanNeighbours(arr, i)) {
            return i;
        }
    }
    return -1;
}
