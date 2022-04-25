import UserAvatar from "./UserAvatar/UserAvatar";
import UserAddress from "./UserAddress/UserAddress";
import UserImages from "./UserImages/UserImages";
import { User } from "../../lib/users";

const UserCard = (props: any) => {
	const user: User = props.children[1];
	return (
		<div>
			<UserAvatar userInfo={user}></UserAvatar>
			<UserAddress userInfo={user}></UserAddress>
			<UserImages userImages={user.images}></UserImages>
		</div>
	);
};

export default UserCard;
