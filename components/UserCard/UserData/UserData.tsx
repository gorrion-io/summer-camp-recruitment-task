import React from 'react';
import styles from './UserData.module.scss';
import { User } from '../../../lib/users';
import Avatar from './Avatar/Avatar';
import BasicData from './BasicData/BasicData';
import Address from './Address/Address';

interface Props {
  user: User;
}

const UserData = ({ user }: Props) => {
  return (
    <div className={styles.userData}>
      <div className={styles.header}>
        <Avatar imageSrc={user.avatar} />
        <BasicData user={user} />
      </div>

      <Address user={user} />
    </div>
  );
};

export default UserData;
