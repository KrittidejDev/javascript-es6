function sum(num1, num2, ...nums) {
  // Start coding here !
  const restTotal = nums.reduce((total, num) => total + num, 0);
  return num1 + num2 + restTotal;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
