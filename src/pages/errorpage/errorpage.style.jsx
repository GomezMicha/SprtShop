import styled from "styled-components";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import {
  colors,
  flexCenter,
  fontFamily,
} from "../../styled-themes/themes.style";

export const ErrorPageContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 85vh;
  ${flexCenter};
  justify-content: space-around;
  background-color: whitesmoke;
`;

export const ImageWrapper = styled.div`
  max-width: 600px;
  width: 50%;
  height: 450px;
  background: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100%;
  background-repeat: no-repeat;
`;
export const ErrorPageWrapper = styled.div`
  padding: 0 1rem 1rem;
  max-width: 600px;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.Rubik};
  text-align: left;

  h2 {
    color: ${colors.lightBlue};
    font-size: 15rem;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${colors.blueNavy};
  }

  p {
    margin-bottom: 2rem;
    font-style: italic;
    color: ${colors.gray};
  }
`;

export const BackToHomeBtn = styled(CustomBtn)`
  width: 300px;

  a {
    padding: 1rem;
    width: 100%;
    color: whitesmoke;
    &:hover {
      color: ${colors.blueNavy};
    }
  }
`;
