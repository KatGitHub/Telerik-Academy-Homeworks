//Problem 4. Write a function that checks if a given object contains a given property.

function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

var objects = ['text', Math, Function];
var properties = ['length', 'PI', 'name'];

for (var i = 0, len = objects.length; i < len; i += 1) {
    console.log('Object ' + objects[i] + ' has property:');
    for (var j = 0, len = properties.length; j < len; j += 1) {
        console.log(properties[j] + ' ' + hasProperty(objects[i], properties[j]));
    }
}
