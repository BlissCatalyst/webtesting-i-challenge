const enhancer = require("./enhancer.js");
// test away!

const items = {
  sword: {
    name: "sword",
    enhancement: 10,
    durability: 55
  },
  axe: {
    name: "axe",
    enhancement: 20,
    durability: 99
  }
};

describe("enhancer.js", () => {
  // ********** REPAIR **********
  describe("repair()", () => {
    test("item durability to 100", () => {
      expect(enhancer.repair(items.sword)).toEqual({
        name: "sword",
        enhancement: 10,
        durability: 100
      });
    });
  });

  // ********** SUCCESS **********
  describe("succeed()", () => {
    test("item enhancement increses by one", () => {
      expect(enhancer.succeed(items.sword)).toEqual({
        name: "sword",
        enhancement: 11,
        durability: 55
      });
    });

    test("Enhancement not changed if already 20", () => {
      expect(enhancer.succeed(items.axe)).toEqual({
        name: "axe",
        enhancement: 20,
        durability: 99
      });
    });
  });

  // ********** FAILURE **********
  describe("fail()", () => {
    test("enhancement > 15 then durability - 5", () => {
      expect(enhancer.fail(items.sword)).toEqual({
        name: "sword",
        enhancement: 10,
        durability: 50
      });
    });
  });
});
