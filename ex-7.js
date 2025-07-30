const employee1 = {
  name: "John",
  age: 20,
  scores:{
    english: undefined,
  },
};

const result1 = employee1.scores.english;
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
    english: undefined,
  },
};

const result2 = employee2.scores.english ?? `English score is not defined`;
console.log(result2);
