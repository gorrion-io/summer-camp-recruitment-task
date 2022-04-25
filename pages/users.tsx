import { NextPage } from "next";
import UserCard from "./UserCard";
import { getAllUsers, User } from "../lib/users";
import { useEffect, useState } from "react";
import styles from "../styles/UsersPage.module.scss";

const Users: NextPage = () => {
  let [data, setData] = useState([] as User[]);

  const save = async () => {
    const users: User[] = await getAllUsers().then((value) => value);
    setData(users);
  };

  useEffect(() => {
    save();
  }, []);

  const allUsers = data.map((user: User) => {
    return <UserCard user={user} />;
  });

  return (
    <div className={styles.usersContainer}>
      <div className={styles.tabContainer}>{allUsers}</div>
    </div>
  );
};

export default Users;
