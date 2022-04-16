import { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/styles";

interface Props {
  field: string;
  label: string;
}

const AddressItem = styled.div`
  & h5 {
    font-size: 0.875rem;
  }

  & p {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    color: ${colors.typography.secondary};
  }

  & h5,
  & p {
    line-height: 1.25rem;
    font-weight: 600;
  }
`;

const AddressField: FC<Props> = ({ field, label }) => {
  return (
    <AddressItem>
      <h5>{field}</h5>
      <p>{label}</p>
    </AddressItem>
  );
};

export default AddressField;
