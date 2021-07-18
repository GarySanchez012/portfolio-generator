const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const animalArray = ["dog", "cat", "pig"];

animalArray.push("cow");

const personObj = {
  name: "Gary Sanchez",
  age: 31,
};

personObj.age = 100;
personObj.occupation = "Developer";


//Using function expression syntax
const addNums = function (numOne, numTwo) {
    return numOne + numTwo;
};

//using new arrow function syntax
//if only performing one action, we don't need the curly braces
const addNum = (numOne, numTwo) => numOne + numTwo;
const sum = addNum(5, 3); //sum would be 8

//let is like var and will allow reassignments of values
let message = "Hello Node!";
message = "Hello ES6!";

let sums = 5 + 3;
sums += 1;

//dont need paranthesis around 1 paramater
const printProfileData = profileDataArr => {
  //this...
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }

  console.log("====================");

  //is the same as this..
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
    //same as above just cleaner because only 1 action is being done
    // profileDataArr.forEach(profileItem => console.log(profileItem));
  });
};

printProfileData(profileDataArgs);