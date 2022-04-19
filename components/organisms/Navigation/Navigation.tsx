import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import styles from './Navigation.module.css';

export const Navigation = ({
  handlePrevPage,
  handleNextPage,
}: NavigationProps) => {
  return (
    <div>
      <BiLeftArrow className={styles.arrow} onClick={handlePrevPage} />
      <BiRightArrow className={styles.arrow} onClick={handleNextPage} />
    </div>
  );
};

type NavigationProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
};
