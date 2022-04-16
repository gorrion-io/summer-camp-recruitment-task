import { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/styles";
import Badges from "./Badges.style";

interface Props {
  fullName: string;
  email: string;
  gender: "Male" | "Female";
  age: number;
}

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h4 {
    font-size: 1rem;
    color: ${colors.typography.primary};
    line-height: 1.5rem;
  }

  & p {
    font-size: 0.75rem;
    color: ${colors.typography.secondary};
    text-transform: lowercase;
    line-height: 1.25rem;
  }
`;

const UserData: FC<Props> = ({ fullName, email, gender, age }) => {
  return (
    <UserDataContainer>
      <div>
        <h4>{fullName}</h4>
        <p>{email}</p>
      </div>
      <Badges {...{ gender, age }} />
    </UserDataContainer>
  );
};

export default UserData;
