/*Problem 2.
 Write a function that removes all elements with a given value.
 Attach it to the array type. Read about prototype and how to attach methods.*/

Array.prototype.remove = function (value) {
    for (var i = 0, len = this.length; i < len; i += 1) {
        if (this[i] === value) {
            this.splice(i, 1);
        }
    }
    return this;
};

var arr = [1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 11, '1'];
var valueToRemove = 1;

console.log('Original array: ' + arr);
console.log('Output (removing \'' + valueToRemove + '\'): ' + arr.remove(valueToRemove));

arr = ['one', 'two', 'three', 'ten'];
valueToRemove = 'ten';
console.log('Original array: ' + arr);
console.log('Output (removing \'' + valueToRemove + '\'): ' + arr.remove(valueToRemove));