import styles from './UserCard.module.css';
import { ButtonGroup } from '../../molecules/ButtonGroup/ButtonGroup';
import { BioSection } from '../../organisms/BioSection/BioSection';
import { AdressSection } from '../../organisms/AdressSection/AdressSection';

export const UserCard = ({ props, handleSetImage }: UserCardProps) => {
  const {
    fullName,
    username,
    email,
    avatar,
    address: { street, city, zip },
    phoneNumber,
    gender,
    age,
    images,
  } = props;

  return (
    <div className={styles.user_card}>
      <BioSection props={{ fullName, email, avatar, gender, age }} />
      <AdressSection street={street} city={city} zip={zip} />
      <ButtonGroup images={images} handleSetImage={handleSetImage} />
    </div>
  );
};

type UserCardProps = {
  handleSetImage: (image: string) => void;
  props: {
    fullName: string;
    username: string;
    email: string;
    avatar: string;
    address: {
      street: string;
      city: string;
      zip: string;
    };
    phoneNumber: string;
    gender: 'Male' | 'Female';
    age: number;
    images: string[];
  };
};
