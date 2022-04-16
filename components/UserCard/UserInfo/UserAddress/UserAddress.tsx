import { FC } from "react";
import AddressField from "./AddressItem.style";
import UserAddressContainer from "./UserAddresContainer.style";

interface Props {
  address: {
    street: string;
    city: string;
    zip: string;
  };
}

const UserAddress: FC<Props> = ({ address }) => {
  const { street, city, zip } = address;
  return (
    <UserAddressContainer>
      <AddressField field={street} label="street" />
      <hr />
      <AddressField field={city} label="city" />
      <hr />
      <AddressField field={zip} label="zip code" />
    </UserAddressContainer>
  );
};

export default UserAddress;
