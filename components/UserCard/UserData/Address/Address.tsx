import React from 'react';
import styles from './Address.module.scss';
import { User } from '../../../../lib/users';

interface Props {
  user: User;
}

const Address = ({ user }: Props) => {
  return (
    <div className={styles.address}>
      <div className={styles.addressItem}>
        <span className={styles.textMain}>{user.address.street}</span>
        <span className={styles.textSecondary}>Street</span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.addressItem}>
        <div className={styles.textMain}>{user.address.city}</div>
        <span className={styles.textSecondary}>City</span>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.addressItem}>
        <div className={styles.textMain}>{user.address.zip}</div>
        <span className={styles.textSecondary}>Zip Code</span>
      </div>
    </div>
  );
};

export default Address;
