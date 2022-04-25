import styles from "./UserImages.module.css";
import React from "react";

const UserImages = (props: any) => {
	const userImages = props.userImages;

	return (
		<div className={styles["images-buttons"]}>
			{userImages.map((image: string, index: number) => (
				<button style={{ width: `${100 / userImages.length}%` }} key={index} className={styles["images-button"]}>
					Image {index + 1}
				</button>
			))}
		</div>
	);
};

export default UserImages;
