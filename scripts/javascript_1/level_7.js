var title = "john doe";

function titleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    })
}
console.log(titleCase(title));