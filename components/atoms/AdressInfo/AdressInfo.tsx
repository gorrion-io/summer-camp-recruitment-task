import styles from './AdressInfo.module.css';

export const AdressInfo = ({ info }: AdressInfodProps) => {
  return <p className={styles.adress_info}>{info}</p>;
};

type AdressInfodProps = {
  info: string;
};
