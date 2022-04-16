import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard/UserCard";
import { getAllUsers, User } from "../lib/users";
import { colors } from "../styles/styles";

const UserPage = styled.main`
  background-color: ${colors.background.light};
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const Users: NextPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };

    getUsers();
  }, []);

  const pageContent = users ? (
    users.map((user, i) => <UserCard key={i} {...user} />)
  ) : (
    <h1>Loading...</h1>
  );

  return (
    <UserPage>
      <Head>
        <title>Users</title>
        <meta name="description" content="Users page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {pageContent}
    </UserPage>
  );
};

export default Users;
