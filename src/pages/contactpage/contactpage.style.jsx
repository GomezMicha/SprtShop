import styled from "styled-components";
import { flexCenterCenter, fontFamily } from "../../styled-themes/themes.style";

export const ContactPageContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

export const ContactPageTitleWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-family: ${fontFamily.Rubik};

  h1 {
    font-size: 2rem;
  }
`;

export const ContactPageContent = styled.div`
  padding-bottom: 2rem;
  height: 60vh;
  ${flexCenterCenter};

  @media screen and (max-width: 960px) {
    padding-top: 2rem;
    flex-direction: column;
    height: auto;
  }
`;
