import { FC } from "react";
import { User } from "../../lib/users";
import { CardWrapper } from "./CardWrapper.style";
import UserImages from "./UserImages/UserImages";
import UserAddress from "./UserInfo/UserAddress/UserAddress";
import UserDetails from "./UserInfo/UserDetails/UserDetails";
import { UserInfo } from "./UserInfo/UserInfo.style";

const UserCard: FC<User> = ({
  avatar,
  fullName,
  email,
  gender,
  age,
  address,
  images,
}) => {
  return (
    <CardWrapper>
      <UserInfo>
        <UserDetails {...{ avatar, fullName, email, gender, age }} />
        <UserAddress {...{ address }} />
      </UserInfo>
      <UserImages {...{ images }} />
    </CardWrapper>
  );
};

export default UserCard;
