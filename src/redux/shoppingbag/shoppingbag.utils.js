// Add item to the shopping bag or increases by 1 the quantity of an existing item on the shopping bag.
export const addItemToBag = (bagItems, itemToAdd) => {
  if (bagItems.constructor !== Array) return;
  if (!itemToAdd.hasOwnProperty("imageUrl")) return;

  const existingItem = bagItems.find((bagItem) => bagItem.id === itemToAdd.id);

  if (existingItem) {
    return bagItems.map((bagItem) => {
      return bagItem.id === itemToAdd.id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem;
    });
  }

  return [...bagItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromBag = (bagItems, itemToRemoveId) => {
  if (bagItems.constructor !== Array) return;
  if (typeof itemToRemoveId !== "string") return;

  return bagItems.filter((bagItem) => bagItem.id !== itemToRemoveId);
};

// Decreases by one the quantity of an existing item on the shopping bag.
export const subtractItemFromBag = (bagItems, itemToSubtract) => {
  if (bagItems.constructor !== Array || bagItems.length === 0) return;
  if (!itemToSubtract.hasOwnProperty("imageUrl")) return;

  const existingItem = bagItems.find(
    (bagItem) => bagItem.id === itemToSubtract.id
  );

  // Returns when the item quantity equals 1 or is undefined.
  if (existingItem === undefined || existingItem.quantity === 1)
    return bagItems;

  return bagItems.map((bagItem) => {
    return bagItem.id === itemToSubtract.id
      ? { ...bagItem, quantity: bagItem.quantity - 1 }
      : bagItem;
  });
};

// Helper function to add className and hide overflow on html when modals are on.
const htmlTag = document.getElementsByTagName("html")[0];
export const setNoScroll = (booleanValue) => {
  if (typeof booleanValue !== "boolean") return;

  return booleanValue
    ? htmlTag.classList.remove("no-scroll")
    : htmlTag.classList.add("no-scroll");
};
