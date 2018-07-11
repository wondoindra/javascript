function searchArray(query) {
    return names.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(searchArray('abdul'));