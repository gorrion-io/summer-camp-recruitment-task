import styles from './Photo.module.css';

export const Photo = ({ handleClosePhoto, currPhoto }: PhotoProps) => {
  return (
    <div className={styles.modal} onClick={handleClosePhoto}>
      <div>
        <img src={currPhoto} />
      </div>
    </div>
  );
};

type PhotoProps = {
  handleClosePhoto: () => void;
  currPhoto: string;
};
