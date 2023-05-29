import styled from "styled-components";
import { flexCenterCenter } from "../../styled-themes/themes.style";

export const CollectionPageContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1440px;
  width: 100%;
  ${flexCenterCenter};

  @media screen and (max-width: 700px) {
    padding: 1rem 0;
  }
`;
