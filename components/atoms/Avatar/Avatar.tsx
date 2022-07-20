import { BadgesGroup } from '../../molecules/BadgesGroup/BadgesGroup';
import styles from './Avatar.module.css';

export const Avatar = ({ avatar }: AvatarProps) => {
  return <img className={styles.avatar} src={avatar} />;
};

type AvatarProps = {
  avatar: string;
};
