import React from 'react';
import styles from './BasicData.module.scss';
import { User } from '../../../../lib/users';

interface Props {
  user: User;
}

const BasicData = ({ user }: Props) => {
  return (
    <div className={styles.basicData}>
      <div className={styles.top}>
        <div className={styles.fullName}>{user.fullName}</div>
        <div className={styles.email}>{user.email}</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.gender}>{user.gender}</div>
        <div className={styles.age}>{user.age}</div>
      </div>
    </div>
  );
};

export default BasicData;
