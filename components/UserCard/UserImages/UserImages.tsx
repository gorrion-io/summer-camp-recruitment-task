import Link from 'next/link';
import React from 'react';
import styles from './UserImages.module.scss';

interface Props {
  images: string[];
}

const UserImages = ({ images }: Props) => {
  return (
    <div className={styles.imagesContainer}>
      <Link href={images[0] || ''}>
        <a className={styles.imageLink}>Image 1</a>
      </Link>

      <div className={styles.divider} />

      <Link href={images[1] || ''}>
        <a className={styles.imageLink}>Image 2</a>
      </Link>

      <div className={styles.divider} />

      <Link href={images[2] || ''}>
        <a className={styles.imageLink}>Image 3</a>
      </Link>
    </div>
  );
};

export default UserImages;
