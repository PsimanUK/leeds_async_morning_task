const { makePizza, makePizzas } = require("./pizza-shop.js");

describe("makePizza()", () => {
  test("invokes callback with empty string when passed an empty string", done => {
    jest.setTimeout(3000);

    makePizza("", (err, delivery) => {
      expect(delivery).toBe("");
      done();
    });
  });
  test("invokes callback with a hot fresh pizza in a well designed box when passed a single pizza", done => {
    jest.setTimeout(3000);

    makePizza("margherita", (err, delivery) => {
      expect(delivery).toBe("a hot margherita in a well designed box");
      done();
    });
  });
});

describe("makePizzas()", () => {
  test("invokes callback with empty array when passed an empty array", done => {
    jest.setTimeout(3000);

    makePizzas([], (err, delivery) => {
      expect(delivery).toEqual([]);
      done();
    });
  });
  test("invokes callback with a hot fresh pizza in a well designed box when passed a single pizza in an array", done => {
    jest.setTimeout(3000);

    makePizzas(["pepperoni"], (err, delivery) => {
      expect(delivery).toEqual(["a hot pepperoni in a well designed box"]);
      done();
    });
  });
  test("invokes callback with several pizzas in an array", done => {
    jest.setTimeout(3000);

    makePizzas(["pepperoni", "margherita", "calzone"], (err, delivery) => {
      expect(delivery).toEqual([
        "a hot pepperoni in a well designed box",
        "a hot margherita in a well designed box",
        "a hot calzone in a well designed box"
      ]);
      done();
    });
  });
});
