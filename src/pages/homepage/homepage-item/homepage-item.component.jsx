import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomepageItemContainer,
  ImageContainer,
  HomepageItemContent,
  Title,
  ShopNow,
} from "./homepage-item.style";

const HomepageItem = ({ title, gridArea, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <HomepageItemContainer
      gridArea={gridArea}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <ImageContainer imageUrl={imageUrl} className="img-style" />
      <HomepageItemContent>
        <Title className="title">{title}</Title>
        <ShopNow>SHOP NOW</ShopNow>
      </HomepageItemContent>
    </HomepageItemContainer>
  );
};

export default HomepageItem;
