import styles from './Email.module.css';

export const Email = ({ email }: EmailProps) => {
  return <p className={styles.user_email}>{email}</p>;
};

type EmailProps = {
  email: string;
};
