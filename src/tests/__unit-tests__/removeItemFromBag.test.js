import { removeItemFromBag } from "../../redux/shoppingbag/shoppingbag.utils";
import { testCollections } from "../test-utils";

describe("Unit: removeItemFromBag", () => {
  it("should return undefined if no array & string value are passed as arguments", () => {
    const bag = [];
    const wrongBag = {};
    const item = testCollections.pants.items[0];

    const result_1 = removeItemFromBag(wrongBag, "some-string");
    const result_2 = removeItemFromBag(bag, 3);
    const result_3 = removeItemFromBag(bag, item.id);

    expect(result_1).toBeUndefined();
    expect(result_2).toBeUndefined();
    expect(result_3).not.toBeUndefined();
  });

  it("should return a new array", () => {
    const item_1 = testCollections.pants.items[1];
    const item_2 = testCollections.hats.items[0];
    const bag_1 = [item_2];
    const bag_2 = [item_1, item_2];

    const result_1 = removeItemFromBag(bag_1, item_1.id);
    const result_2 = removeItemFromBag(bag_2, item_2.id);

    expect(bag_1.length).toBe(1);
    expect(bag_2.length).toBe(2);
    expect(result_1.length).toBe(1);
    expect(result_2.length).toBe(1);
    expect(bag_1).not.toBe(result_1);
    expect(bag_2).not.toBe(result_2);
  });

  it("should return a new array with one item less", () => {
    const item_1 = testCollections.pants.items[1];
    const item_2 = testCollections.hats.items[0];
    const bag = [item_1, item_2];

    const result_1 = removeItemFromBag(bag, item_1.id);
    const result_2 = removeItemFromBag(bag, item_2.id);
    const result_3 = removeItemFromBag(bag, "some-id");

    expect(result_1.length).toEqual(1);
    expect(result_1).not.toContain(item_1);
    expect(result_1).toContain(item_2);
    expect(result_2.length).toEqual(1);
    expect(result_2).not.toContain(item_2);
    expect(result_2).toContain(item_1);
    expect(result_3.length).toBe(2);
    expect(result_3).toContain(item_1);
    expect(result_3).toContain(item_2);
  });
});
