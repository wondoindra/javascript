var cars = ["Mazda", 5, "Lambhorgini"];
cars.push(true);
cars[4] = cars[0] + cars[1];
cars[5] = cars[0] + cars[3];
cars[6] = "";
console.log(cars);
cars.pop();
console.log(cars);