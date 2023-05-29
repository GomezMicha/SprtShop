import React, { useState, useEffect } from "react";

import {
  CollectionWrapper,
  CollectionTitleWrapper,
  Title,
  SelectWrapper,
  SelectSpan,
  ItemWrapper,
} from "./collection.style";

import SelectElement from "../select-element/select-element.component";
import ItemCard from "../../../components/item-card/item-card.component";
import {
  sortedItemsAsc,
  sortedItemsDes,
  sortedItemsA_Z,
  sortedItemsZ_A,
} from "./collection.utils";

const Collection = ({ title, items }) => {
  const [sortedItems, setSortedItems] = useState([...items]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort collection Items.
  const handleChange = (event) => {
    const { value } = event.target;

    const sortedCollections = {
      pricelow: () => setSortedItems(sortedItemsAsc(sortedItems)),
      pricehigh: () => setSortedItems(sortedItemsDes(sortedItems)),
      A_Z: () => setSortedItems(sortedItemsA_Z(sortedItems)),
      Z_A: () => setSortedItems(sortedItemsZ_A(sortedItems)),
      relevance: () => setSortedItems([...items]),
    };

    return sortedCollections[value]();
  };

  return (
    <CollectionWrapper>
      <CollectionTitleWrapper>
        <Title>{title}</Title>
        <SelectWrapper>
          <SelectSpan>{items.length} items</SelectSpan>
          <div>
            <SelectElement handleChange={handleChange} />
          </div>
        </SelectWrapper>
      </CollectionTitleWrapper>

      <ItemWrapper>
        {sortedItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ItemWrapper>
    </CollectionWrapper>
  );
};

export default Collection;
