import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CollectionPreviewWrapper,
  CollectionPreviewTitleWrapper,
  PreviewWrapper,
} from "./collection-preview.style";

import ItemCard from "../item-card/item-card.component";

const CollectionPreview = ({ props: { title, items, routeName } }) => {
  const history = useNavigate();

  return (
    <CollectionPreviewWrapper>
      <CollectionPreviewTitleWrapper>
        <h1>{title}</h1>
        <span onClick={() => history(`/shop/${routeName}`)}>
          See more &rarr;
        </span>
      </CollectionPreviewTitleWrapper>

      <PreviewWrapper>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ItemCard key={item.id} item={item} margin="1rem" />
          ))}
      </PreviewWrapper>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
