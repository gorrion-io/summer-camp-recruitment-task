const UserAvatar = (props: any) => {
	const userData = props.userInfo;
	const altImage = `${userData.fullName} photo`;
	return (
		<div>
			<img src={userData.avatar} alt={altImage} />
			<div>
				<p>{userData.fullName}</p>
				<p>{userData.email}</p>
				<p>{userData.gender}</p>
				<p>{userData.age}</p>
			</div>
		</div>
	);
};

export default UserAvatar;
