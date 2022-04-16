import styled from "styled-components";
import { colors } from "../../../../styles/styles";

const UserAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 11.625rem;
  margin-top: 1.5rem;

  & hr {
    border: none;
    height: 0.07rem;
    background-color: ${colors.gray_darker};
  }
`;

export default UserAddressContainer;
