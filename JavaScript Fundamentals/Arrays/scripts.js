//Problem 1. Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Print the obtained array on the console.

var length = 20;
console.log('Problem 1 output:');
printArray(initArray(length));

function initArray(length) {
    var arr = new Array(length);

    for (var i = 0; i < length; i += 1) {
        arr[i] = i * 5;
    }
    return arr;
}
function printArray(arr) {
    for (var i = 0; i < arr.length; i += 1) {
        console.log('element[' + i + '] = ' + arr[i]);
    }
}

//Problem 2. Write a script that compares two char arrays lexicographically (letter by letter).

var arr1 = ['T', 'e', 'l', 'e', 'r', 'i', 'k'];
var arr2 = ['t', 'e', 'l', 'A', 'c', 'a', 'd', 'e', 'm', 'y'];
console.log('Problem 2 output:');
compareCharArrays(arr1, arr2);

function compareCharArrays(arr1, arr2) {
    var minLength = Math.min(arr1.length, arr2.length);
    for (var i = 0; i < minLength; i += 1) {
        console.log(arr1[i] + ' equals ' + arr2[i] + ': ' + (arr1[i] === arr2[i]));
    }
}

//Problem 3. Write a script that finds the maximal sequence of equal elements in an array.

var arr = [2, 1, 1, 2, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1];
console.log('Problem 3 output:');
console.log('example array: ' + arr);
console.log(returnMaxSequence(arr));

function returnMaxSequence(arr) {
    for (var i = 0, count = 1, maxCount = 1, end; i < arr.length - 1; i += 1) {
        if (arr[i] === arr[i + 1]) {
            count++;
            if (count > maxCount) {
                maxCount = count;
                end = i + 1;
            }
        } else {
            count = 1;
        }
    }
    var output = [];
    for (i = end - maxCount + 1; i <= end; i += 1) {
        output.push(arr[i]);
    }
    return output;
}

//Problem 4. Write a script that finds the maximal increasing sequence in an array.

var arr4 = [3, 2, 3, 4, 2, 2, 4, -6, -5, -3, -1];
console.log('Problem 4 output:');
console.log('example array: ' + arr4);
console.log(returnMaxIncreasingSequence(arr4));

function returnMaxIncreasingSequence(arr) {
    var output = [];
    for (var i = 0, count = 1, maxCount = 1, index; i < arr.length - 1; i += 1) {
        if (arr[i] < arr[i + 1]) {
            count += 1;
            if (count > maxCount) {
                maxCount = count;
                index = i + 1;
            }
        } else {
            count = 1;
        }
    }
    for (i = index; i > index - maxCount; i -= 1) {
        output.unshift(arr[i]);
    }
    return output.join(', ');
}

/* Problem 5. Sorting an array means to arrange its elements in increasing order. Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position,
 find the smallest from the rest, move it at the second position, etc.*/

var arr5 = [6, -4, 7, 1, 10, 2, 15, -3];
console.log('Problem 5 output:');
console.log('example array: ' + arr5);
console.log(sortArray(arr5));

function sortArray(arr) {
    var position = 0;
    for (var j = 0; j < arr.length - 1; j += 1) {
        for (var i = j + 1, min = arr[j], index = j; i < arr.length; i += 1) {
            if (arr[i] < min) {
                min = arr[i];
                index = i;
            }
        }
        arr.splice(index, 1);
        arr.splice(position, 0, min);
        position += 1;
    }
    return arr;
}

//Problem 6. Write a script that finds the most frequent number in an array.

var arr6 = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 1, 1, 1];
console.log('Problem 6 output:');
console.log('example array: ' + arr6);
console.log(returnMostFrequentNumber(arr6));

function returnMostFrequentNumber(arr) {
    arr = sortArray(arr);
    var output = returnMaxSequence(arr);
    return 'element ' + output[0] + ' repeats ' + output.length + ' times.';
}

//Problem 7. Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

var arr7 = [3, 2, 99, 4, 8, 7, 10, -6, -5, -3, -1];
console.log('Problem 7 output:');
console.log('example array: ' + arr7);
console.log(returnIndex(arr7, 99));

function returnIndex(arr, element) {
    var unsortedArr = arr.slice();
    var sortedArr = sortArray(arr);
    var start = 0;
    var end = arr.length - 1;
    var middle = ((end + start) / 2) | 0;
    while (true) {
        if (+sortedArr[middle] !== +element) {
            if (start === end) {
                return 'No such element found.';
            }
            if (+sortedArr[middle] > +element) {
                end = middle - 1;
                middle = ((end + start) / 2) | 0;
            } else {
                start = middle + 1;
                middle = ((end + start) / 2) | 0;
            }
        } else {
            break;
        }
    }
    return 'index of ' + element + ' is ' + unsortedArr.indexOf(sortedArr[middle]);
}
