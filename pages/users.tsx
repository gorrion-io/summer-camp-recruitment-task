import { NextPage } from 'next';
import { User } from '../lib/users';

import UserCard from '../components/UserCard/UserCard';
import { getAllUsers } from '../lib/users';

const Users: NextPage = (props: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {props.allUsers.map((value: User) => {
        return <UserCard user={value} />;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const allUsers = await getAllUsers();

  return {
    props: { allUsers }, // will be passed to the page component as props
  };
}

export default Users;
