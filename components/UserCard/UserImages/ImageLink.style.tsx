import styled from "styled-components";
import { colors } from "../../../styles/styles";

export const ImageLink = styled.a`
  color: ${colors.white};
  background-color: ${colors.brand.primary};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.brand.primary_dark};
  }
`;
