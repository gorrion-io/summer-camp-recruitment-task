import { NextPage } from "next";

import { dataConverter } from '../helpers/usersDataConverter';
import { dataCustomizer } from '../helpers/usersDataCustomizer';
import { dataMerger } from "../helpers/userDataMerger";

const Users: NextPage = () => {
  return <h1>Not implemented</h1>;
};

export async function getStaticProps() {
  
  const convertedData = dataConverter();
  const customizedData = dataCustomizer();
  const mergedData = dataMerger();

  return {props: {convertedData, customizedData, mergedData}}

}

export default Users;
