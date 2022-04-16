import { NextPage } from "next";
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
    const getUser = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };

    getUser();
  }, []);

  return (
    <UserPage>
      {users ? (
        users.map((user) => <UserCard {...user} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </UserPage>
  );
};

export default Users;
