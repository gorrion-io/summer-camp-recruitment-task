import classes from './CardImages.module.css';

const CardImages = ({ user }: any) => {
  return (
    <div className={classes.imgbox}>
      <button type='button'>Image 1</button>
      <button type='button'>Image 2</button>
      <button type='button'>Image 3</button>
    </div>
  );
};

export default CardImages;
