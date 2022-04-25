const UserAddress = (props: any) => {
	const userData = props.userInfo;
	return (
		<div>
			<div>
				<p>{userData.address.street}</p>
				<p>STREET</p>
			</div>
			<div>
				<p>{userData.address.city}</p>
				<p>CITY</p>
			</div>
			<div>
				<p>{userData.address.zip}</p>
				<p>ZIP CODE</p>
			</div>
		</div>
	);
};

export default UserAddress;
