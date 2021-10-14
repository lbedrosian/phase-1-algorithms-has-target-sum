function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i = 0; i < array.length; i++) {
  const complement = target - array[i]
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] === complement) return true
  }
}
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  comp = targeted number - array 0
  see if any numbers are comp
  if so, return true
  if non are, return false
*/

//if any two numbers equal the targeted number, return true

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

/*
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30], 25);
// returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5], 4);
// returns false, since no pair of numbers adds up to 4
*/