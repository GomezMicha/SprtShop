import styled from "styled-components";
import { colors, fontFamily } from "../../../styled-themes/themes.style";
import CustomBtn from "../../custom-btn/custom-btn.component";

export const FormWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const FormHeader = styled.div`
  margin-bottom: 1rem;
  padding: 0 2rem;
  width: 100%;

  h2 {
    height: 40px;
    font-size: 1.6rem;
    font-family: ${fontFamily.Rubik};
    color: ${colors.blueNavy};
  }
`;

export const FormElementWrapper = styled.div`
  padding: 1rem 2rem 2rem;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding: 1rem 1.5rem 2rem;
  }

  p {
    padding-top: 0.5rem;
    height: 27px;
    color: ${colors.darkRed};
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

export const SubmitWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

export const RecoverPasswordBtn = styled(CustomBtn)`
  width: 100%;
`;
