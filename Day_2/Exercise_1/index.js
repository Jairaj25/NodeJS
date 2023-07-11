class Car {
    constructor(model, fuel) {  // Constructor
        this.carModel = model;
        this.fuel = fuel;
    }
    get getCarModel() {
        return this.carModel
    }
    setCarModel(carmodel) {
        this.carModel = carmodel;
    }
    get getFuel() {
        return this.fuel
    }
    addFuel(fuels) {
        this.fuel += fuels;
    }
}
const BMW = new Car("BMW", 100);
const Mercedes = new Car("Mercedes", 100);
const Porsche = new Car("Porsche", 100);
console.log(`${BMW.carModel}, ${BMW.fuel}`, '\n\n')
console.log(`${Mercedes.carModel}, ${Mercedes.fuel}`, '\n\n')
console.log(`${Porsche.carModel}, ${Porsche.fuel}`, '\n\n')
BMW.addFuel(50)
Mercedes.addFuel(50)
Porsche.addFuel(50)
console.log('After adding Fuel\n\n')
console.log(`${BMW.carModel}, ${BMW.fuel}`, '\n\n')
console.log(`${Mercedes.carModel}, ${Mercedes.fuel}`, '\n\n')
console.log(`${Porsche.carModel}, ${BMW.fuel}`, '\n\n')