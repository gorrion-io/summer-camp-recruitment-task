import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/pages/Users.module.scss';
import Layout from '../components/Layout/Layout';
import UserCard from '../components/UserCard/UserCard';
import { getAllUsers, User } from '../lib/users';

export async function getServerSideProps() {
  const users = await getAllUsers();

  return {
    props: { users },
  };
}

interface Props {
  users: User[];
}

const Users: NextPage<Props> = ({ users }) => {
  return (
    <Layout>
      <Head>
        <title>Gorrion Summer Camp 2022 - recruitment task</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Users</h1>
        <div className={styles.userCards}>
          {users && users.map((user) => <UserCard user={user} key={user.email} />)}
        </div>
      </main>
    </Layout>
  );
};

export default Users;
