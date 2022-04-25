import styles from "./UserImages.module.css";
import React, { useState } from "react";
import ImageViewer from "./ImageViewer";

const UserImages = (props: any) => {
	const userImages = props.userImages;

	const [showComponent, setShowComponent] = useState(false);

	const showImageViewer = () => {
		setShowComponent(true);
	};

	return (
		<div className={styles["images-buttons"]}>
			{userImages.map((image: string, index: number) => {
				return (
					<button style={{ width: `${100 / userImages.length}%` }} key={index} className={styles["images-button"]} onClick={showImageViewer}>
						Image {index + 1}
					</button>
				);
			})}
			{showComponent ? <ImageViewer src={userImages[0]} isActive={setShowComponent} /> : null}
		</div>
	);
};

export default UserImages;
