import styles from './Button.module.css';

export const Button = ({ handleSetImage, image, text }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={() => handleSetImage(image)}>
      {text}
    </button>
  );
};

type ButtonProps = {
  handleSetImage: (image: string) => void;
  image: string;
  text: string;
};
