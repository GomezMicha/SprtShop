import React from "react";
import { ShopPageWrapperDiv } from "./shoppage-wrapper.style";

import CollectionPreview from "../../../components/collection-preview/collection-preview.component";
import SomethingWentWrong from "../../../components/something-went-wrong/something-went-wrong.component";

import { useSelector } from "react-redux";
import { selectShop } from "../../../redux/shop/shop.selector";

const ShopPageWrapper = () => {
  const { collections } = useSelector(selectShop);

  return (
    <ShopPageWrapperDiv>
      {Object.keys(collections).length > 0 ? (
        <div>
          {Object.keys(collections).map((key) => {
            return (
              <CollectionPreview
                key={collections[key].id}
                props={collections[key]}
              />
            );
          })}
        </div>
      ) : (
        <SomethingWentWrong link="/" children="Back to Home Page" />
      )}
    </ShopPageWrapperDiv>
  );
};

export default ShopPageWrapper;
