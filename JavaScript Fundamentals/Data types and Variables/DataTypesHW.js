//Problem 1. Assign all the possible JavaScript literals to different variables.
var a = 'some text';
var b = '"How you doin"?, Joey said.'; //Problem 2. Create a string variable with quoted text in it.
var c = 102;
var d = 0x1123;
var e = 3.1415;
var f = function doThis() {};
var g = [1, 2, 3, 4, 5];
var h = ['one', 'two', 'three'];
var i = {a: 'alpha', b: 'beta'};
var j = true;
var k = false;
var l = null; //Problem 4. Create null, undefined variables and try typeof on them.
var m;

var objects = [a, b, c, d, e, f, g, h, i, j, k, l, m, undef];

//Problem 3. Try typeof on all variables you created.
for (var object in objects) {
    console.log(objects[object]);
    console.log(typeof objects[object]);
}