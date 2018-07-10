var constantaI = 0;
var intervaltimer = setInterval(repeat, 1000);

function repeat() {
    if (constantaI >= 0 && constantaI <= 10) {
        console.log("constantaI : ", constantaI);
        constantaI++;
    } else {
        console.log("constantaI has reached target limit : ", constantaI);
        clearInterval(intervaltimer);
    }
}