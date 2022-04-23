import React from 'react';
import styles from './UserImages.module.scss';

interface Props {
  images: string[];
}

const UserImages = ({ images }: Props) => {
  return (
    <div className={styles.imagesContainer}>
      <a href={images[0]} className={styles.imageLink}>
        Image 1
      </a>

      <div className={styles.divider} />

      <a href={images[1]} className={styles.imageLink}>
        Image 2
      </a>

      <div className={styles.divider} />

      <a href={images[2]} className={styles.imageLink}>
        Image 3
      </a>
    </div>
  );
};

export default UserImages;
