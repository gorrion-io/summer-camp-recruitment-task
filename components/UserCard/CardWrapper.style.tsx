import styled from "styled-components";
import { colors } from "../../styles/styles";

export const CardWrapper = styled.article`
  width: 20rem;
  height: 24.5rem;
  border-radius: 1rem;
  border: 0.0625rem solid ${colors.background.darker};
  background-color: ${colors.white};
  box-shadow: 0 0.5rem 1rem ${colors.shadow_gray};
  font-family: "Public Sans", sans-serif;
  position: relative;
  overflow: hidden;
`;
