import styles from './BadgeGender.module.css';

export const BadgeGender = ({ gender }: BadgeGenderProps) => {
  return <div className={styles.badge}>{gender}</div>;
};

type BadgeGenderProps = {
  gender: 'Male' | 'Female';
};
