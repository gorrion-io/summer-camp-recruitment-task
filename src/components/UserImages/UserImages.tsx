const UserImages = (props: any) => {
	const userImages = props.userImages;
	return (
		<div>
			{userImages.map((image, index) => (
				<button key={image}>Image {index + 1}</button>
			))}
		</div>
	);
};

export default UserImages;
