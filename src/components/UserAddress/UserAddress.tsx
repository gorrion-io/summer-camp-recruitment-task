import styles from "./UserAddress.module.css";

const UserAddress = (props: any) => {
	const userData = props.userInfo;
	return (
		<div className={styles["user-address"]}>
			<div className={styles.address}>
				<p className={styles["user-name"]}>{userData.address.street}</p>
				<p className={styles["user-description"]}>Street</p>
			</div>
			<div className={styles.address}>
				<p className={styles["user-name"]}>{userData.address.city}</p>
				<p className={styles["user-description"]}>City</p>
			</div>
			<div className={styles.address}>
				<p className={styles["user-name"]}>{userData.address.zip}</p>
				<p className={styles["user-description"]}>Zip code</p>
			</div>
		</div>
	);
};

export default UserAddress;
