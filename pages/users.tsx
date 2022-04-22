import { NextPage } from 'next';
import styles from '../styles/pages/Users.module.scss';
import Layout from '../components/Layout/Layout';

const Users: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}></main>
    </Layout>
  );
};

export default Users;
