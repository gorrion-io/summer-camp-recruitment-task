import styles from './FullName.module.css';

export const FullName = ({ fullName }: BioSectionProps) => {
  return <h1 className={styles.user_fullName}>{fullName}</h1>;
};

type BioSectionProps = {
  fullName: string;
};
