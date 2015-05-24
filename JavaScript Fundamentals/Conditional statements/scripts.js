/*Problem 1. Write an if statement that takes two double variables a and b and exchanges their values
 if the first one is greater than the second.*/

function exchangeIfGreater(a, b) {
    var temp = a;
    if ((a * 1) > (b * 1)) {
        a = b;
        b = temp;
    }
    return (a + ' ' + b);
}

function solveProblem1() {
    var input = document.getElementById('input').value.split(' ');
    var output = exchangeIfGreater(input[0], input[1]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 2. Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.

function getSignOfProduct(a, b, c) {
    var output = '+';
    if (a === '0' || b === '0' || c === '0') {
        return '0';
    }
    else if (((a < 0) && (b < 0) && (c < 0)) ||
        ((a < 0) && (b > 0) && (c > 0)) ||
        ((a > 0) && (b < 0) && (c > 0)) ||
        ((a > 0) && (b > 0) && (c < 0))) {
        output = '-';
    }
    return output;
}

function solveProblem2() {
    var input = document.getElementById('input').value.split(' ');
    var output = getSignOfProduct(input[0], input[1], input[2]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 3. Write a script that finds the biggest of three numbers.

function getBiggestOf3Num(a, b, c) {
    var biggestN = a;
    if ((b * 1) > (a * 1)) {
        if ((b * 1) > (c * 1)) {
            biggestN = b;
        }
        else {
            biggestN = c;
        }
    }
    else if ((c * 1) > (a * 1)) {
        biggestN = c;
    }
    return biggestN;
}

function solveProblem3() {
    var input = document.getElementById('input').value.split(' ');
    var output = getBiggestOf3Num(input[0], input[1], input[2]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 4. Sort 3 real values in descending order.

function sortInDescending(a, b, c) {
    var output = '';
    if ((b * 1) > (a * 1)) {
        if ((b * 1) > (c * 1)) {
            output = b;
            if (a * 1 > c * 1) {
                output += ' ' + a + ' ' + c;
            }
            else {
                output += ' ' + c + ' ' + a;
            }
        }
        else {
            output = c + ' ' + b + ' ' + a;
        }
    }
    else if ((c * 1) > (a * 1)) {
        output = c + ' ' + a + ' ' + b;
    }
    else {
        output = a;
        if (b * 1 > c * 1) {
            output += ' ' + b + ' ' + c;
        }
        else {
            output += ' ' + c + ' ' + b;
        }
    }
    return output;
}

function solveProblem4() {
    var input = document.getElementById('input').value.split(' ');
    var output = sortInDescending(input[0], input[1], input[2]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

/*Problem 5. Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word
 (in English). Print “not a digit” in case of invalid input.
 Use a switch statement.*/

function returnDigitAsWord(n) {
    switch (n * 1) {
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

function solveProblem5() {
    var input = document.getElementById('input').value;
    var output = returnDigitAsWord(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Problem 6. Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0
// and solves it (prints its real roots).

function solveEquation(a, b, c) {
    var delta = (b * b) - (4 * a * c);
    var deltaIsZero = (delta === 0);
    var deltaIsPositive = (delta > 0);
    if (deltaIsZero) {
        return ('x = ' + ((b * -1) / (2 * a)));
    }
    else if (deltaIsPositive) {
        return ('x1 = ' + ((b * -1) + Math.sqrt(delta)) / (2 * a) +
        ' x2 = ' + (((b * -1) - Math.sqrt(delta)) / (2 * a)));
    }
    else {
        return 'No real roots.';
    }
}

function solveProblem6() {
    var input = document.getElementById('input').value.split(' ');
    var output = solveEquation(input[0], input[1], input[2]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

function getBiggestOf5Numbers(a, b, c, d, e) {
    var biggestN = a * 1;
    b *= 1;
    c *= 1;
    d *= 1;
    e *= 1;
    if (b > biggestN) {
        if (b > c) {
            if (b > d) {
                if (b > e) {
                    biggestN = b;
                }
                else {
                    biggestN = e;
                }
            }
            else if (d > e) {
                biggestN = d;
            }
            else {
                biggestN = e;
            }
        }
        else if (c > d) {
            if (c > e) {
                biggestN = c;
            }
        }
        else if (d > e) {
            biggestN = d;
        }
        else {
            biggestN = e;
        }
    }
    else if (c > biggestN) {
        if (c > d) {
            if (c > e) {
                biggestN = c;
            }
            else {
                biggestN = e;
            }
        }
        else if (d > e) {
            biggestN = d;
        }
        else {
            biggestN = e;
        }
    }
    else if (d > biggestN) {
        if (d > e) {
            biggestN = d;
        }
        else {
            biggestN = e;
        }
    }
    else if (e > biggestN) {
        biggestN = e;
    }
    return biggestN;
}

function solveProblem7() {
    var input = document.getElementById('input').value.split(' ');
    var output = getBiggestOf5Numbers(input[0], input[1], input[2], input[3], input[4]);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function returnNumberAsWord(n) {
    var output = '';
    n *= 1;
    if ((n > 99) || (n < 10)) {
        output = returnDigitAsWord((n + '')[0]);
    }
    if (n > 9) {
        if (n > 99) {
            output += ' hundred ';
            if (n % 100 !== 0) {
                output += 'and ';
            }
            n = ((n + '')[1] + (n + '')[2]);
        }
        n += '';
        if (n[0] === '1') {
            switch (n * 1) {
                case 10:
                    output += 'ten';
                    break;
                case 11:
                    output += 'eleven';
                    break;
                case 12:
                    output += 'twelve';
                    break;
                case 13:
                    output += 'thirteen';
                    break;
                case 14:
                    output += 'fourteen';
                    break;
                case 15:
                    output += 'fifteen';
                    break;
                case 16:
                    output += 'sixteen';
                    break;
                case 17:
                    output += 'seventeen';
                    break;
                case 18:
                    output += 'eighteen';
                    break;
                case 19:
                    output += 'nineteen';
                    break;
            }
        }
        else {
            switch (n[0] * 1) {
                case 0:
                    output += '';
                    break;
                case 2:
                    output += 'twenty';
                    break;
                case 3:
                    output += 'thirty';
                    break;
                case 4:
                    output += 'forty';
                    break;
                case 5:
                    output += 'fifty';
                    break;
                case 6:
                    output += 'sixty';
                    break;
                case 7:
                    output += 'seventy';
                    break;
                case 8:
                    output += 'eighty';
                    break;
                case 9:
                    output += 'ninety';
                    break;
            }
            switch (n[1] * 1) {
                case 0:
                    output += '';
                    break;
                case 1:
                    output += ' one';
                    break;
                case 2:
                    output += ' two';
                    break;
                case 3:
                    output += ' three';
                    break;
                case 4:
                    output += ' four';
                    break;
                case 5:
                    output += ' five';
                    break;
                case 6:
                    output += ' six';
                    break;
                case 7:
                    output += ' seven';
                    break;
                case 8:
                    output += ' eight';
                    break;
                case 9:
                    output += ' nine';
                    break;
            }

        }
    }
    return output;
}

function solveProblem8() {
    var input = document.getElementById('input').value;
    var output = returnNumberAsWord(input);
    document.getElementById('output').innerHTML = output;
    console.log(output);
}

//Function for visualization of chosen problem in html page.

function loadProblemElements() {
    var chosenOption = document.getElementById('select').value;
    var description = '', inputDirection = 'Enter 3 numbers separated by space:', requiredFunction = '';
    switch (chosenOption) {
        case 'Problem 1.':
            description = 'Problem 1. Write an if statement that takes two double variables a and b ' +
                'and exchanges their values if the first one is greater than the second.';
            inputDirection = 'Enter two numbers separated by space:';
            requiredFunction = 'solveProblem1()';
            break;
        case 'Problem 2.':
            description = 'Problem 2. Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.';
            requiredFunction = 'solveProblem2()';
            break;
        case 'Problem 3.':
            description = 'Problem 3. Write a script that finds the biggest of three numbers.';
            requiredFunction = 'solveProblem3()';
            break;
        case 'Problem 4.':
            description = 'Problem 4. Sort 3 real values in descending order.';
            requiredFunction = 'solveProblem4()';
            break;
        case 'Problem 5.':
            description = 'Problem 5. Write a script that asks for a digit (0-9), and depending on the input, ' +
                'shows the digit as a word (in English). Print "not a digit" in case of invalid input. ' +
                'Use a switch statement.';
            inputDirection = 'Enter a number in the range [0...9]:';
            requiredFunction = 'solveProblem5()';
            break;
        case 'Problem 6.':
            description = 'Problem 6. Write a script that reads the coefficients a, b and c of a quadratic equation ' +
                'ax2 + bx + c = 0 and solves it (prints its real roots).';
            inputDirection = 'Enter 3 coefficients separated by space:';
            requiredFunction = 'solveProblem6()';
            break;
        case 'Problem 7.':
            description = 'Problem 7. Write a script that finds the greatest of given 5 variables. Use nested if statements.';
            inputDirection = 'Enter 5 numbers separated by space:';
            requiredFunction = 'solveProblem7()';
            break;
        case 'Problem 8.':
            description = 'Problem 9. Write a script that converts a number in the range [0...999] to words, corresponding to its English pronunciation.';
            inputDirection = 'Enter a number in the range [0...999]:';
            requiredFunction = 'solveProblem8()';
            break;
    }

    document.getElementById('description').innerHTML = description;
    document.getElementById('input-direction').innerHTML = inputDirection;
    document.getElementById('check').setAttribute('onclick', requiredFunction);
}
