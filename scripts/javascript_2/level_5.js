const namesz = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
];

function filteringString(array) {
    array.forEach(function (element) {
        if (typeof element === 'string') {
            console.log(element);
        }
    })
}
console.log(filteringString(namesz));