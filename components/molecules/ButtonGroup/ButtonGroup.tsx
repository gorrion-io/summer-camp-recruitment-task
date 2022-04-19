import { Button } from '../../atoms/Button/Button';
import styles from './ButtonGroup.module.css';

export const ButtonGroup = ({ handleSetImage, images }: ButtonGroupProps) => {
  return (
    <div className={styles.buttons_group}>
      {images.map((image, index) => (
        <Button
          key={index}
          image={image}
          text={'Image' + (index + 1)}
          handleSetImage={handleSetImage}
        />
      ))}
    </div>
  );
};

type ButtonGroupProps = {
  handleSetImage: (image: string) => void;
  images: string[];
};
