//Problem 1. Write an expression that checks if given integer is odd or even.

function isOdd(n) {
    if (isNaN(n)) {
        return 'Not a number';
    } else if (!!(n % 2)) {
        return 'Odd';
    } else {
        return 'Even';
    }
}

function solveProblem1() {
    var input = document.getElementById('input').value;
    var output = isOdd(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 2. Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function isDividedBy7and5(n) {
    if (isNaN(n)) {
        return 'Not a number';
    } else if (!!(n % 35)) {
        return 'cannot be divided by 7 and 5.';
    } else {
        return 'can be divided by 7 and 5.';
    }
}

function solveProblem2() {
    var input = document.getElementById('input').value;
    var output = isDividedBy7and5(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 3. Write an expression that calculates rectangle’s area by given width and height.

function calculateAreaRect(width, height) {
    if (isNaN(width) || isNaN(height)) {
        return 'Not a number';
    } else {
        return (width * height);
    }
}

function solveProblem3() {
    var input = document.getElementById('input').value.split(' ');
    var output = calculateAreaRect(input[0], input[1]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}
//Problem 4. Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function checkThirdDigit(n) {
    if (isNaN(n)) {
        return 'Not a number';
    } else if ((((n / 100) | 0) % 10) === 7) {
        return 'third digit is 7';
    } else {
        return 'third digit is not 7';
    }
}

function solveProblem4() {
    var input = document.getElementById('input').value;
    var output = checkThirdDigit(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 5. Write a boolean expression for finding the bit #3 (counting from 0) of a given integer.

function checkBit(n, position) {
    if (isNaN(n) || isNaN(position)) {
        return 'Not a number';
    } else {
        var nAndMask = n & (1 << position);
        var bit = nAndMask >> position;
        return bit;
    }
}

function solveProblem5() {
    var input = document.getElementById('input').value;
    var output = checkBit(input, 3);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

/*
 Problem 6. Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5).
 {0,0} is the centre and 5 is the radius.
 */

function checkPointInCircle(x, y, radius, circleX, circleY) {
    if (isNaN(y) || isNaN(x) || isNaN(radius) || isNaN(circleX) || isNaN(circleY)) {
        return 'Not a number';
    } else {
        return ((((x - circleX) * (x - circleX)) + ((y - circleY) * (y - circleY))) <= (radius * radius));
    }
}

function solveProblem6() {
    var input = document.getElementById('input').value.split(' ');
    var radius = 5, circleX = 0, circleY = 0;
    var output = checkPointInCircle(input[0], input[1], radius, circleX, circleY);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 7. Write an expression that checks if given positive integer number n (n ? 100) is prime.

function checkIfPrimeNumber(n) {
    if (isNaN(n)) {
        return 'Not a number';
    } else {
        if (n <= 1) {
            return false;
        } else {
            var sqrt = Math.sqrt(n);
            for (var i = 2; i <= sqrt; i += 1) {
                if (!(n % i)) {
                    return false;
                }
            }
            return true;
        }
    }
}

function solveProblem7() {
    var input = document.getElementById('input').value;
    var output = checkIfPrimeNumber(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 8. Write an expression that calculates trapezoid\'s area by given sides a and b and height h.

function getTrapezoidArea(sideA, sideB, height) {
    if (isNaN(sideA) || isNaN(sideB) || isNaN(height)) {
        return 'Not a number';
    } else {
        return ((sideA * 1 + sideB * 1) * height / 2);
    }
}

function solveProblem8() {
    var input = document.getElementById('input').value.split(' ');
    var output = getTrapezoidArea(input[0], input[1], input[2]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

/*
 Problem 9. Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
 and out of the rectangle R(top=1, left=-1, width=6, height=2).
 */

function checkPointOutsideRectangle(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 'Not a number';
    } else {
        //Rectangle's top=1, right = 5, bottom = -1, left = -1.
        return (((x > 5) || (x < -1)) || ((y > 1) || (y < -1)));
    }
}

function checkPointInCircleOutRect(x, y) {
    var radius = 3, circleX = 1, circleY = 1;
    return (checkPointInCircle(x, y, radius, circleX, circleY) &&
    checkPointOutsideRectangle(x, y));
}

function solveProblem9() {
    var input = document.getElementById('input').value.split(' ');
    var output = checkPointInCircleOutRect(input[0], input[1]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Function for visualization of chosen problem in html page.

function loadProblemElements() {
    var chosenOption = document.getElementById('select').value;
    var description = '', inputDirection = 'Enter some integer:', requiredFunction = '';
    switch (chosenOption) {
        case 'Problem 1.':
            description = 'Problem 1. Write an expression that checks if given integer is odd or even.';
            requiredFunction = 'solveProblem1()';
            break;
        case 'Problem 2.':
            description = 'Problem 2. Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.';
            requiredFunction = 'solveProblem2()';
            break;
        case 'Problem 3.':
            description = 'Problem 3. Write an expression that calculates rectangle\'s area by given width and height.';
            inputDirection = 'Enter width and height separated by space:';
            requiredFunction = 'solveProblem3()';
            break;
        case 'Problem 4.':
            description = 'Problem 4. Write an expression that checks for given integer if its third digit (right-to-left) is 7.';
            requiredFunction = 'solveProblem4()';
            break;
        case 'Problem 5.':
            description = 'Problem 5. Write a boolean expression for finding the bit #3 (counting from 0) of a given integer.';
            requiredFunction = 'solveProblem5()';
            break;
        case 'Problem 6.':
            description = 'Problem 6. Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). {0,0} is the centre and 5 is the radius.';
            inputDirection = 'Enter x and y coordinates separated by space:';
            requiredFunction = 'solveProblem6()';
            break;
        case 'Problem 7.':
            description = 'Problem 7. Write an expression that checks if given positive integer number n (n <= 100) is prime.';
            requiredFunction = 'solveProblem7()';
            break;
        case 'Problem 8.':
            description = 'Problem 8. Write an expression that calculates trapezoid\'s area by given sides a and b and height h.';
            inputDirection = 'Enter side a, side b and height separated by space:';
            requiredFunction = 'solveProblem8()';
            break;
        case 'Problem 9.':
            description = 'Problem 9. Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).';
            inputDirection = 'Enter x and y coordinates separated by space:';
            requiredFunction = 'solveProblem9()';
            break;
    }

    document.getElementById('description').innerHTML = description;
    document.getElementById('input-direction').innerHTML = inputDirection;
    document.getElementById('check').setAttribute('onclick', requiredFunction);
}
