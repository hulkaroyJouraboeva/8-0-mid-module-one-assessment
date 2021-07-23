/*
  You may use the following animals array to test your functions inside of
  this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the 
  command line. You will need to be in the directory where the `index.js`
  file is kept for the above command to work.

  Finally, remember that in order for you to see output 
  on the command line, you must log something out.
*/

const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

    // 0. GUARD CLAUSE 
    // 

    // 1. INITIAL/DEFAULT VALUE
    // 

    // 2. DEFINE LOOP
    // 

        // 3. ACCUMULATE!
        //

    // RETURN modified inital value

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. 
 * See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */

function getTotalCount(animals) {
    // 0. GUARD CLAUSE 
    // IF array is empty
    if (animals.length === 0) {
      // return 0
      return 0;
    }

    // 1. INITIAL/DEFAULT VALUE
    // default value, TOTAL is a NUMBER
    let total = 0;

    // 2. DEFINE LOOP
    // FOR OF loop to iterate through each ANIMAL{} in ANIMALS[]
    for (const eachAnimal of animals) {
      // 3. ACCUMULATE!
      // TOTAL is re-assigned accumulation of eachAnimal count
      total += eachAnimal.count
    }
    // RETURN modified inital value
    return total;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */

function getAllKinds(animals) {
    // 0. GUARD CLAUSE 
    // IF input array is empty
    if (animals.length === 0) {
      // return an empty array
      return [];
    }

    // 1. INITIAL/DEFAULT VALUE
    // initial value is an array of KINDs as a string
    let kindsArr = [];

    // 2. DEFINE LOOP
    // FOR OF loop to iterate through each ANIMAL{} in ANIMALS[]
    for (const eachAnimal of animals) {
      // 3. ACCUMULATE!
      // initial value is re-assigned 
      // by eachAnimal KIND being PUSHed into it
      kindsArr.push(eachAnimal.kind);
    }
    // RETURN modified inital value
    return kindsArr;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an 
 * animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. 
 * See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals 
 * that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */

function filterByCountMinimum(animals, minimum) {
    // 0. GUARD CLAUSE 
    // IF ANIMALS [] is empty 
    if (animals.length === 0) {
      // return an empty array
      return [];
    }

    // 1. INITIAL/DEFAULT VALUE
    // initial value is an array[] of specific ANIMAL objects{}
    let theAnimalsArr = [];

    // 2. DEFINE LOOP
    // FOR OF to iterate each ANIMAL{} in ANIMALS[]
    for (const eachAnimal of animals) {
      // 3. ACCUMULATE!
      // IF eachAnimal count is >= MINIMUM
      if (eachAnimal.count >= minimum) {
        // re-assign inital value by PUSHing eachAnimal into inital value []
        theAnimalsArr.push(eachAnimal)
      }
    }
    // RETURN modified inital value
    return theAnimalsArr;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. 
 * If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */

function getMostCommonAnimal(animals) {
    // 0. GUARD CLAUSE 
    // IF animals[] is empty
    if (animals.length === 0) {
      // return null
      return null;
    }

      // 1. INITIAL/DEFAULT VALUE
      // inital value, start @ animals[0]
      let highestCount = animals[0];

      // 2. DEFINE LOOP
      // FOR I loop to iterate each ANIMAL{}
      for (let i = 0; i < animals.length; i++) {
        // eachAnimal is the varying animals[i]
        const eachAnimal = animals[i];
        // 3. ACCUMULATE!
        // IF eachAnimal COUNT is > than the highestCount COUNT
        if (eachAnimal.count > highestCount.count) {
          // re-assign inital value to eachAnimal
          highestCount = eachAnimal;
        }
      }
    // RETURN modified inital value
    return highestCount;
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
