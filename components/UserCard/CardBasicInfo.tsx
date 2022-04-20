import classes from './CardBasicInfo.module.css';
import { User } from '../../lib/users';

const CardBasicInfo = ({ user }: any) => {
  return (
    <div className={classes.cardinfo}>
      <div className={classes.infoheader}>
        <img src={`${user.avatar}`} alt='' className={classes.avatar} />
        <div className={classes.basicinfo}>
          <h4 className={classes.userfullname}>{user.fullName}</h4>
          <p className={classes.useremail}>{user.email}</p>
          <div className={classes.infoflexbox}>
            <p className={classes.usergender}>{user.gender}</p>
            <p className={classes.userage}>{user.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBasicInfo;
