import React from 'react';
import UserImages from './UserImages/UserImages';
import styles from './UserCard.module.scss';
import UserData from './UserData/UserData';
import type { User } from '../../lib/users';

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className={styles.userCard}>
      <UserData user={user} />
      <UserImages images={user.images} />
    </div>
  );
};

export default UserCard;
