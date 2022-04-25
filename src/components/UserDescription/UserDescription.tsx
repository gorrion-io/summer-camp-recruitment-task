import styles from "./UserDescription.module.css";

const UserAvatar = (props: any) => {
	const userData = props.userInfo;
	const altImage = `${userData.fullName} photo`;
	return (
		<div className={styles["user-description"]}>
			<img src={userData.avatar} alt={altImage} className={styles.image} />
			<div className={styles["user-info"]}>
				<p className={styles.name}>{userData.fullName}</p>
				<p className={styles.email}>{userData.email}</p>
				<span className={`${styles.gender} ${styles.rect}`}>{userData.gender}</span>
				<span className={`${styles.age} ${styles.rect}`}>{userData.age}</span>
			</div>
		</div>
	);
};

export default UserAvatar;
