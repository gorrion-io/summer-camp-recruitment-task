import { Email } from '../../atoms/Email/Email';
import { FullName } from '../../atoms/FullName/FullName';
import styles from './BioInfo.module.css';

export const BioInfo = ({ fullName, email }: BioInfoProps) => {
  return (
    <div className={styles.bio_info}>
      <FullName fullName={fullName} />
      <Email email={email} />
    </div>
  );
};

type BioInfoProps = {
  fullName: string;
  email: string;
};
