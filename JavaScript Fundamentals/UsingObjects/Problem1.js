/*Problem 1.
 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.*/

function createPoint(coordinateX, coordinateY) {
    return {
        x: coordinateX,
        y: coordinateY,
        toString: function () {
            return 'Point (' + this.x + ', ' + this.y + ')';
        }
    };
}

function createLine(pointA, pointB) {
    return {
        pointA: pointA,
        pointB: pointB,
        toString: function () {
            return 'Line (' + this.pointA.toString() + ', ' + this.pointB.toString() + ')';
        },
        length: calculateDistanceBetween2Points(pointA, pointB)
    };
}

function calculateDistanceBetween2Points(point1, point2) {
    return Math.sqrt(((point2.x - point1.x) * (point2.x - point1.x)) +
        ((point2.y - point1.y) * (point2.y - point1.y)));
}

function checkIf3LinesFormTriangle(line1, line2, line3) {
    var length1 = line1.length;
    var length2 = line2.length;
    var length3 = line3.length;
    return ((length1 < length2 + length3) &&
    (length2 < length1 + length3) &&
    (length3 < length2 + length1));
}

var points = [
    createPoint(0, 2),
    createPoint(3, -2),
    createPoint(-4, -3),
    createPoint(5, 4),
    createPoint(-7, -8),
    createPoint(-5, 0)];

var lines = [
    createLine(points[0], points[1]),
    createLine(points[2], points[3]),
    createLine(points[4], points[5])];

for (var point in points) {
    console.log(points[point].toString());
}

for (var line in lines) {
    console.log(lines[line].toString());
}

console.log('3 lines can form a triangle? ' + checkIf3LinesFormTriangle(lines[0], lines[1], lines[2]));
