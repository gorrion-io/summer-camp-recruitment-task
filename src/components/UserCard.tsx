import UserDescription from "./UserDescription/UserDescription";
import UserAddress from "./UserAddress/UserAddress";
import UserImages from "./UserImages/UserImages";
import { User } from "../../lib/users";
import styles from "./UserCard.module.css";

const UserCard = (props: any) => {
	const user: User = props.children[1];
	return (
		<div className={styles["user-card"]}>
			<UserDescription userInfo={user}></UserDescription>
			<UserAddress userInfo={user}></UserAddress>
			<UserImages userImages={user.images}></UserImages>
		</div>
	);
};

export default UserCard;
