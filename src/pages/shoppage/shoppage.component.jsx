import React from "react";
import { ShopPageContainer } from "./shoppage.style";

import ShopPageWrapper from "./shoppage-wrapper/shoppage-wrapper.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { useSelector } from "react-redux";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

const ShopPageWrapperWithSpinner = WithSpinner(ShopPageWrapper);

const ShopPage = () => {
  const isFetching = useSelector(selectIsFetching);
  return (
    <ErrorHandler>
      <ShopPageContainer>
        <ShopPageWrapperWithSpinner isLoading={isFetching} />
      </ShopPageContainer>
    </ErrorHandler>
  );
};

export default ShopPage;
