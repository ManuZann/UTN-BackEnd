const Chance = require('chance')

const chance = new Chance()

const randomName = chance.name()
const randomAge = chance.age()
const randomEmail = chance.email()


console.log(randomName);
console.log(randomAge);
console.log(randomEmail);