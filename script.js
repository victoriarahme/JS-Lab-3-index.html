//Step 1: Declaring
let animal = ["dog", "cat", "bird", "rat", "hippo"];
console.log(animal);

//Step 2: Accessing

console.log(animal[0]);
console.log(animal.length);
console.log(animal.at(-1));
console.log(animal[2]);

//Step 3: Properties
animal.length = 5
console.log(animal);

//step 4: Methods

/*pop
let lastAnimal = animal.pop();
console.log(lastAnimal);
console.log(animal);
*/

//slice
let smallAnimal = animal.slice(2, 4);
console.log(smallAnimal);


//Entries
let iterator = animal.entries();
for (let entry of iterator){
    console.log(entry)
}

//Step 5: Iterating
animal.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

for (let i = 0; i < animal.length; i++) {
        console.log(animal[i]);
    }


//Step 6: Destructuring
let [firstAnimal, secondAnimal] = animal
    console.log(firstAnimal);
    console.log(secondAnimal);