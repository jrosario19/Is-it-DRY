const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* Answer: This example is not DRY because it is repeating every time in console.log. To avoid it we can use the following approach: */

const petsRefactor = pets.map(pet=>console.log(pet));