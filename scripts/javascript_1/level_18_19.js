function calculateSquareArea(a) {
    return a * a;
}

function calculateSquarePerimeter(a) {
    return 4 * a;
}

function calculateCircleArea(a) {
    return Math.PI * (a * a);
}

function calculateCircleCircumference(a) {
    return 2 * Math.PI * a
}

function calculateCubeArea(a) {
    return 6 * (a * a);
}

function calculateCubeVolume(a) {
    return a * a * a;
}

function calculateCylinderArea(a) {
    return Math.PI * (a * a);
}

function calculateCylinderVolume(a, b) {
    return Math.PI * (a * a) * b;
}

console.log(calculateCylinderArea(7));
console.log(calculateSquareArea(add(2, 2)));
console.log(add(calculateSquareArea(5), calculateCircleArea(7)));