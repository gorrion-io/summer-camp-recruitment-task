import classes from './CardImages.module.css';

const CardImages = ({ user }: any) => {
  return (
    <div className={classes.imgbox}>
      <button
        type='button'
        onClick={() => {
          if (user.images[0]) window.open(user.images[1], '_blank');
          else {
            alert('User has not first image');
          }
        }}
      >
        Image 1
      </button>
      <button
        type='button'
        onClick={() => {
          if (user.images[1]) window.open(user.images[1], '_blank');
          else {
            alert('User has not second image');
          }
        }}
      >
        Image 2
      </button>
      <button
        type='button'
        onClick={() => {
          if (user.images[2]) window.open(user.images[1], '_blank');
          else {
            alert('User has not third image');
          }
        }}
      >
        Image 3
      </button>
    </div>
  );
};

export default CardImages;
