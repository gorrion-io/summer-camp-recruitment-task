import { Avatar } from '../../atoms/Avatar/Avatar';
import { BadgesGroup } from '../../molecules/BadgesGroup/BadgesGroup';
import { BioInfo } from '../../molecules/BioInfo/BioInfo';
import styles from './BioSection.module.css';

export const BioSection = ({ props }: BioSectionProps) => {
  const { fullName, email, avatar, gender, age } = props;

  return (
    <div className={styles.bio_container}>
      <Avatar avatar={avatar} />
      <BioInfo email={email} fullName={fullName} />
      <BadgesGroup props={{ gender, age }} />
    </div>
  );
};

type BioSectionProps = {
  props: {
    fullName: string;
    email: string;
    avatar: string;
    gender: 'Male' | 'Female';
    age: number;
  };
};
