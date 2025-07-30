// Exercise #7: Optional Chaining
const employee1 = {
  name: "John",
  age: 20,
  scores: {
  }
};

const result1 = employee1.scores.english;
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = `English score is ${employee2.scores.english ?? "not defined"}`;
console.log(result2);
