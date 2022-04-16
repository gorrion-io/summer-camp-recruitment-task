import { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/styles";

interface Props {
  gender: "Male" | "Female";
  age: number;
}

const BadgesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface BagdeProps {
  green?: boolean;
}

const Badge = styled.div<BagdeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.green ? colors.light_green : colors.gray};
  border: 0.0625rem solid
    ${(props) => (props.green ? colors.green : colors.gray_darker)};
  color: ${(props) =>
    props.green ? colors.dark_green : colors.typography.primary};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  letter-spacing: 0.1em;
`;

const Badges: FC<Props> = ({ gender, age }) => {
  return (
    <BadgesContainer>
      <Badge green>{gender}</Badge>
      <Badge>{age}</Badge>
    </BadgesContainer>
  );
};

export default Badges;
