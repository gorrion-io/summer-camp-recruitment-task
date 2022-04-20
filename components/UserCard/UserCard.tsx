import { User } from '../../lib/users';
import CardImages from './CardImages';
import CardBasicInfo from './CardBasicInfo';
import CardAdressesInfo from './CardAdressesInfo';
import classes from './UserCard.module.css';

const UserCard = ({ user }: any) => {
  return (
    <section className={classes.cardframe}>
      <div className={classes.cardbox}>
        <CardBasicInfo user={user} />
        <CardAdressesInfo user={user} />
        <CardImages user={user} />
      </div>
    </section>
  );
};

export default UserCard;
