/*Problem 3.
 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.*/

function clone(obj) {
    if (obj === null || typeof(obj) !== 'object') {
        return obj;
    }

    var temp = obj.constructor();

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            temp[key] = clone(obj[key]);
        }
    }
    return temp;
}

var str = 'some text';
var obj = {name: 'Ivan', surname: 'Ivanov'};
var strCloned = clone(str);
var objCloned = clone(obj);
obj = {};
str = 'changed';

console.log(strCloned);
console.log(objCloned);

