import { NextPage } from "next";
import { generateUsersData } from "../services/usersDataManager";

const Users: NextPage = () => {
  return <h1>Not implemented</h1>;
};

export async function getStaticProps() {

  const usersData = generateUsersData();

  return {props: {usersData}}

}

export default Users;
