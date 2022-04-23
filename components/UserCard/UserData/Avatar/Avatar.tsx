import Image from 'next/image';
import React from 'react';
import styles from './Avatar.module.scss';

type Props = {
  imageSrc: string;
};

const Avatar = ({ imageSrc }: Props) => {
  return <img src={imageSrc} alt='user avatar' className={styles.avatar} />;
};

export default Avatar;
