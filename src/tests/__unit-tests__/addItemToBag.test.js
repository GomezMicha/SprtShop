import { addItemToBag } from "../../redux/shoppingbag/shoppingbag.utils";
import { testCollections } from "../test-utils";

describe("Unit: addItemToBag", () => {
  it("should return undefined if no array & object are passed as arguments", () => {
    const bag = [];
    const item = testCollections.hats.items[0];
    const wrongBag = {};
    const itemsArray = [];

    const result_1 = addItemToBag(wrongBag, item);
    const result_2 = addItemToBag(bag, itemsArray);
    const result_3 = addItemToBag(bag, item);

    expect(result_1).toBeUndefined();
    expect(result_2).toBeUndefined();
    expect(result_3).not.toBeUndefined();
  });

  it("should add a quantity property and increase it every time the same object item is passsed", () => {
    const bag = [];
    const item = testCollections.pants.items[1];

    const result_1 = addItemToBag(bag, item);

    expect(result_1[0].hasOwnProperty("quantity")).toBe(true);
    expect(result_1[0].quantity).toEqual(1);

    const newBag = result_1;

    const result_2 = addItemToBag(newBag, item);
    expect(result_2[0].quantity).toEqual(2);
  });

  it("should return a new array", () => {
    const bag_1 = [];
    const item = testCollections.pants.items[0];
    const bag_2 = new Array({ ...testCollections.hats.items[1], quantity: 1 });

    const result_1 = addItemToBag(bag_1, item);
    const result_2 = addItemToBag(bag_2, item);

    expect(bag_1.length).toBe(0);
    expect(bag_2.length).toBe(1);
    expect(bag_2.hasOwnProperty("quantity")).toBe(false);
    expect(result_1.length).toBe(1);
    expect(result_2[0].hasOwnProperty("quantity")).toBe(true);
  });
});
