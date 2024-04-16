  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
    //define array of numbers
let nums = [1, 2, 3, 4, 5];
    //create/define new empty array
let results = [];
    //write simple for loop
for (let num of nums) {
  results.push(num * 2); //multiplies each number in arry by 2
}
console.log(results);
// returns [2,4,6,8,10]

// Using map()
     //call the map method on the array itself "nums.map();"
     //pass map method a function which will be called on each element of the nums array
 const multiplyTwo = function (num) { //creates multiplyTwo function
  return num * 2;
 }
     //create results variable
      //pass "multiplyTwo" function into map method
 const mapResults = nums.map(multiplyTwo); 

 console.log(mapResults); // returns [2,4,6,8,10]
 //above method more verbose than needed


// Simplified w/ map()   more like real thing
const simplified = nums.map(function(num) {return num * 2 });
  //function moved inside the parentheses
console.log(simplified);
  

// Simplfied w/ map() + arrow function (typical way of using map professionally)
const arrow = nums.map(num => num * 2);
   /**function converted to an arrow function
    * only takes 1 parameter(number to be multiplied by 2 so no need for parenteses around num
    *no need for return statement or curly braces etc
    all taken care of by fat arrow
    */  
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
  //iterate through the array of students
  //return for each one, an array containing name and id
  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds);