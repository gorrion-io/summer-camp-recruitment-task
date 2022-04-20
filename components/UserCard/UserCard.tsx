// components
import CardImages from './CardImages';
import CardBasicInfo from './CardBasicInfo';
import CardAdressesInfo from './CardAdressesInfo';
// type
import { User } from '../../lib/users';
// styles
import classes from './UserCard.module.css';

// UserCard component

const UserCard = ({ user }: { user: User }) => {
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
