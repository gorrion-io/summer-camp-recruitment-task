import styles from './BadgeGender.module.css';

export const BadgeAge = ({ age }: BadgeAgeProps) => {
  return <div className={styles.badge}>{age}</div>;
};

type BadgeAgeProps = {
  age: number;
};
