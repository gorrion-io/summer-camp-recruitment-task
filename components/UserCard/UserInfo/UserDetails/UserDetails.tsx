import { FC } from "react";
import Avatar from "./Avatar.style";
import UserData from "./UserData.style";
import UserDetailsContainer from "./UserDetailsContainer.style";

interface Props {
  avatar: string;
  fullName: string;
  email: string;
  gender: "Male" | "Female";
  age: number;
}

const UserDetails: FC<Props> = ({ avatar, fullName, email, gender, age }) => {
  return (
    <UserDetailsContainer>
      <Avatar src={avatar} alt={`${fullName}'s avatar`} />
      <UserData {...{fullName, email, gender, age}} />
    </UserDetailsContainer>
  );
};

export default UserDetails;
