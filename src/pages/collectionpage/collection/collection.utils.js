// Helper function to sort array items.
export const sortedItemsAsc = (items) => {
  return [...items].sort((first, second) => first.price - second.price);
};

export const sortedItemsDes = (items) => {
  return [...items].sort((first, second) => second.price - first.price);
};

export const sortedItemsA_Z = (items) => {
  return [...items].sort((first, second) =>
    first.name > second.name ? 1 : -1
  );
};

export const sortedItemsZ_A = (items) => {
  return [...items].sort((first, second) =>
    second.name > first.name ? 1 : -1
  );
};
