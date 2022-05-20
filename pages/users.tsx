import { NextPage } from "next";
import { getAllUsers } from "../lib/users";

const Users: NextPage = () => {
  getAllUsers()
  return <h1>Not implemented</h1>;
};

export default Users;
