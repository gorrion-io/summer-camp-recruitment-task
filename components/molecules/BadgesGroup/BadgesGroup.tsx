import { BadgeAge } from '../../atoms/BadgeAge/BadgeGender';
import { BadgeGender } from '../../atoms/BagdeGender/BadgeGender';
import styles from './BadgesGroup.module.css';

export const BadgesGroup = ({ props }: BioSectionProps) => {
  const { gender, age } = props;

  return (
    <div className={styles.badges_container}>
      <BadgeGender gender={gender} />
      <BadgeAge age={age} />
    </div>
  );
};

type BioSectionProps = {
  props: {
    gender: 'Male' | 'Female';
    age: number;
  };
};
