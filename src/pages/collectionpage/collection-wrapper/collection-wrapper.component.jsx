import React from "react";
import { useParams } from "react-router-dom";

import { CollectionItemsWrapper } from "./collection-wrapper.style";

import Collection from "../collection/collection.component";
import SomethingWentWrong from "../../../components/something-went-wrong/something-went-wrong.component";

import { useSelector } from "react-redux";
import { selectShopDataCollection } from "../../../redux/shop/shop.selector";

const CollectionWrapper = () => {
  // Catch the value of the route shop/:collectionId.
  const { collectionId } = useParams();
  // Then pass this value to select the related collection data to be passed down.
  const collection = useSelector(selectShopDataCollection(collectionId));

  // If route value doesn't match with any collection data, collection will be undefined.
  return (
    <CollectionItemsWrapper>
      {collection ? (
        <Collection {...collection} />
      ) : (
        <SomethingWentWrong link="/shop" children="Back to Shop Page" />
      )}
    </CollectionItemsWrapper>
  );
};

export default CollectionWrapper;
