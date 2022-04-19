import styles from './AdressTitle.module.css';

export const AdressTitle = ({ title }: AdressTitledProps) => {
  return <p className={styles.adress_title}>{title}</p>;
};

type AdressTitledProps = {
  title: string;
};
