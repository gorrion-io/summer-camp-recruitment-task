import styles from "../styles/Card.module.css";
import Image from "next/image";
import { User } from "../lib/users";

interface IUserProps {
	user: User;
}

export const Card = (user: IUserProps) => {
	const { fullName, email, avatar, address, gender, age, images } = user.user;

	function printImageButtons() {
		return images.map((image, index) => (
			<a
				className={styles.images__hyperlink}
				href={image}
				key={index.toString()}>
				Image {index + 1}
			</a>
		));
	}

	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.header}>
					<div
						style={{
							borderRadius: "100%",
							border: "1px solid #E9E9E9",
							width: 56,
							height: 56,
						}}>
						<Image
							src={avatar}
							width={56}
							height={56}
							style={{ borderRadius: "100%" }}
						/>
					</div>
					<div className={styles.user}>
						<div className={styles.credentials}>
							<h4 className={styles.credentials__heading}>{fullName}</h4>
							<p className={styles.credentials__paragraph}>{email}</p>
						</div>
						<div className={styles.bio}>
							<p
								className={styles.bio__paragraph}
								style={{
									backgroundColor: "#ECFDF5",
									border: "1px solid #D1FAE5",
									color: "#065F46",
								}}>
								{gender}
							</p>
							<p
								className={styles.bio__paragraph}
								style={{
									backgroundColor: "#F6F6F6",
									border: "1px solid #E9E9E9",
									color: "#303030",
								}}>
								{age}
							</p>
						</div>
					</div>
				</div>
				<ul className={styles.address}>
					<li key="street">
						<h5 className={styles.address__heading}>{address.street}</h5>
						<p className={styles.address__paragraph}>Street</p>
					</li>
					<li key="city">
						<h5 className={styles.address__heading}>{address.city}</h5>
						<p className={styles.address__paragraph}>City</p>
					</li>
					<li key="zip">
						<h5 className={styles.address__heading}>{address.zip}</h5>
						<p className={styles.address__paragraph}>ZIP code</p>
					</li>
				</ul>
			</div>
			<div className={styles.images}>{printImageButtons()}</div>
		</div>
	);
};
