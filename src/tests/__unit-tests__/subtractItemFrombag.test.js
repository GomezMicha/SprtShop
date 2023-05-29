import { subtractItemFromBag } from "../../redux/shoppingbag/shoppingbag.utils";
import { testCollections } from "../test-utils";

describe("Unit: subtractItemFromBag", () => {
  it("should return undefined if no array & object are passed as arguments", () => {
    const item_1 = testCollections.pants.items[0];
    const itemsArray = [];
    const bag_1 = [];
    const bag_2 = new Array({ ...item_1, quantity: 2 });

    const result_1 = subtractItemFromBag(bag_1, item_1);
    const result_2 = subtractItemFromBag(true, item_1);
    const result_3 = subtractItemFromBag(bag_2, itemsArray);
    const result_4 = subtractItemFromBag(bag_2, item_1);

    expect(result_1).toBeUndefined();
    expect(result_2).toBeUndefined();
    expect(result_3).toBeUndefined();
    expect(result_4).not.toBeUndefined();
  });

  it("should subtract by one the quantity property value. If quantity equals 1 should return", () => {
    const item_1 = testCollections.hats.items[0];
    const item_2 = testCollections.hats.items[1];
    const bag = new Array({ ...item_2, quantity: 2 });

    const result_1 = subtractItemFromBag(bag, item_2);
    const result_2 = subtractItemFromBag(result_1, item_2);
    const result_3 = subtractItemFromBag(result_2, item_2);
    const result_4 = subtractItemFromBag(bag, item_1);

    expect(result_1.length).toBe(1);
    expect(result_1[0].quantity).toEqual(1);
    expect(result_2[0].quantity).toEqual(1);
    expect(result_3[0].quantity).toEqual(1);
    expect(result_4.length).toBe(1);
    expect(result_4[0].quantity).toEqual(2);
  });

  it("should return a new array", () => {
    const item_1 = testCollections.pants.items[0];
    const bag = new Array({ ...item_1, quantity: 3 });

    const result_1 = subtractItemFromBag(bag, item_1);
    const result_2 = subtractItemFromBag(result_1, item_1);

    expect(bag[0].quantity).toEqual(3);
    expect(bag).not.toBe(result_1);
    expect(result_1[0].quantity).toEqual(2);
    expect(result_1).not.toBe(result_2);
  });
});
