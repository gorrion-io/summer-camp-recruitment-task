import { NextPage } from "next";

import { dataConverter } from '../helpers/usersDataConverter';

const Users: NextPage = () => {
  return <h1>Not implemented</h1>;
};

export async function getStaticProps() {
  
  const convertedData = dataConverter();

  return {props: {convertedData}}

}

export default Users;
