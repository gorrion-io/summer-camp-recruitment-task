// styles
import classes from './CardAdressesInfo.module.css';
//type
import { User } from '../../lib/users';

// subcomponent, which displays user's adress section in UserCard
const CardAdressesInfo = ({ user }: { user: User }) => {
  return (
    <div className={classes.adressbox}>
      <div className={classes.streetbox}>
        <h5>{user.address.street}</h5>
        <p>STREET</p>
      </div>
      <div className={classes.citybox}>
        <h5>{user.address.city}</h5>
        <p>CITY</p>
      </div>
      <div className={classes.zipcodebox}>
        <h5>{user.address.zip}</h5>
        <p>ZIP CODE</p>
      </div>
    </div>
  );
};

export default CardAdressesInfo;
