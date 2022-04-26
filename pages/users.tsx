import { NextPage } from "next";
import UserCard from "../components/UserCard";

interface Iuser {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  phoneNumber: string;
  gender: "Male" | "Female";
  age: number;
  images: string[];
}

interface Props {
  data: { status: boolean; payload: Iuser[] };
}

const Users: NextPage<Props> = ({ data }) => {
  return <UserCard user={data.payload[0]} />;
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/users`);
  const data = await res.json();

  return { props: { data } };
}

export default Users;
