import React from "react";

import { CollectionPageContainer } from "./collectionpage.style";

import CollectionWrapper from "./collection-wrapper/collection-wrapper.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

import { useSelector } from "react-redux";
import { selectIsFetching } from "../../redux/shop/shop.selector";

const CollectionWrapperWithSpinner = WithSpinner(CollectionWrapper);

const CollectionPage = () => {
  const isFetching = useSelector(selectIsFetching);

  return (
    <ErrorHandler>
      <CollectionPageContainer>
        <CollectionWrapperWithSpinner isLoading={isFetching} />
      </CollectionPageContainer>
    </ErrorHandler>
  );
};

export default CollectionPage;
