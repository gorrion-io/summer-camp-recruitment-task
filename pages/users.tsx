import { NextPage } from 'next';
import { Key } from 'react';
import useSWR from 'swr';
import { User } from '../lib/users';
import styles from '../styles/users.module.css';

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Users: NextPage = () => {
  const { data, error } = useSWR(() => `/api/users`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul className={styles.container}>
      {data.map((user: User, index: Key) => (
        <li className={styles.user} key={index}>
          {user.fullName} is {user.age} yo. His nickname is {user.username}
        </li>
      ))}
    </ul>
  );
};

export default Users;
