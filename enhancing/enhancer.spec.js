const enhancer = require("./enhancer.js");
// test away!

let items = {
  sword: {
    name: "sword",
    enhancement: 10,
    durability: 55
  }
};

describe("repair()", () => {
  test("item durability to 100", () => {
    expect(enhancer.repair(items.sword)).toEqual({
      name: "sword",
      enhancement: 10,
      durability: 100
    });
  });
});
