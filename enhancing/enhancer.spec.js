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
  },
  hammer: {
    name: "hammer",
    enhancement: 16,
    durability: 25
  },
  dagger: {
    name: "dagger",
    enhancement: 19,
    durability: 100
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
    test("enhancement > 15 then durability -5", () => {
      expect(enhancer.fail(items.sword)).toEqual({
        name: "sword",
        enhancement: 10,
        durability: 50
      });
    });

    test("enhancement >= 15 then durability -10", () => {
      expect(enhancer.fail(items.hammer)).toEqual({
        name: "hammer",
        enhancement: 16,
        durability: 15
      });
    });

    test("enhancement > 16 then enhancement -1", () => {
      expect(enhancer.fail(items.dagger)).toEqual({
        name: "dagger",
        enhancement: 18,
        durability: 90
      });
    });
  });
});
