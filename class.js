class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(miles) {
     this.#mileage = miles;
  }

  info() {
    console.log(this.#brand, this.#model, this.#mileage);
  }
}

const car1 = new Car('Open', 'Vectra', 3000);
car1.info();
car1.mileage = 5500;
car1.info();