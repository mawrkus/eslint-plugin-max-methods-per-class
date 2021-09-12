"use strict";

const rule = require("../rules/max-methods-per-class");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });

const code1 = `
class Class1 {
  constructor() {}
  [Symbol.iterator]() {}
  get prop() {}
  method1() {}
  static method2() {}
}
`;

const code2 = `
class Class2 {
  constructor() {}
  method() {}
}

class Class3 {
  constructor() {}
  method1() {}
  method2() {}
}
`;

const code3 = `
class Class4 {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
  method4() {}
  method5() {}
  method6() {}
}
`;

ruleTester.run("max-methods-per-class", rule, {
  valid: [
    {
      code: code1,
      options: [5],
    },
    {
      code: code2,
      options: [3],
    },
  ],
  invalid: [
    {
      code: code2,
      options: [1],
      errors: [
        { message: "Class has too many methods (2). Maximum allowed is 1." },
        { message: "Class has too many methods (3). Maximum allowed is 1." },
      ],
    },
    {
      code: code2,
      options: [2],
      errors: [{ message: "Class has too many methods (3). Maximum allowed is 2." }],
    },
    {
      code: code3,
      options: [],
      errors: [{ message: "Class has too many methods (7). Maximum allowed is 6." }],
    },
  ],
});
