const { writeFile } = require('fs/promises');
const { join } = require('path');
const { faker } = require('@faker-js/faker');

const CarCategory = require('../src/entities/carCategory');
const Customer = require('../src/entities/customer');
const Car = require('../src/entities/car');

const seedBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  carIds: [],
  price: faker.finance.amount(20, 100)
})

const cars = [];
const customers = [];
for(let index = 0; index < ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    releaseYear: faker.date.past().getFullYear(),
    gasAvailable: true,
    available: true
  });
  
  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    age: faker.random.numeric()
  });

  customers.push(customer);
}

const write = (filename, data) => 
  writeFile(join(seedBaseFolder, filename), JSON.stringify(data));

;(async () => {
  await write('cars.json', cars);
  await write('customers.json', customers);
  await write('carCategory.json', [carCategory]);

  console.log('> Cars | ', cars);
  console.log('> Car Category | ', carCategory);
  console.log('> Customers | ', customers);
})();