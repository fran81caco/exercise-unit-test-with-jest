test("adds 14 + 9 to equal 23", () => {
  const {sum} = require('./app.js'); 
  expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", function()  {
    const {fromEuroToDollar} = require("./app.js");
    const dollars = fromEuroToDollar(1);
    const expected = 1.07; 
    expect(dollars).toBe(expected);
});