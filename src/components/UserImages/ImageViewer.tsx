import styles from "./ImageViewer.module.css";

const ImageViewer = (props: any) => {
	const closeViewer = () => {
		props.isActive(false);
	};
	return (
		<div className={styles["image-viewer"]} onClick={closeViewer}>
			<img src={props.src} className={styles.image}></img>
		</div>
	);
};

export default ImageViewer;
