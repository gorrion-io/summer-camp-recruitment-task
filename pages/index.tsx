import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import UserCard from "../src/components/UserCard";
import { useEffect, useState } from "react";
import { User } from "../lib/users";
import { getAllUsers } from "../lib/users";

const Home: NextPage = () => {
	const [data, setData] = useState<User[]>([]);
	const [userIndex, setUserIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const users = await getAllUsers();
			setData(users);
			setIsLoading(false);
		};
		getData();
	}, []);

	const changeToPreviousUser = () => {
		if (userIndex != 0) {
			setUserIndex(userIndex - 1);
		}
	};

	const changeToNextUser = () => {
		if (userIndex != data.length - 1) {
			setUserIndex(userIndex + 1);
		}
	};

	if (isLoading) {
		return null;
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Gorrion Summer Camp 2022 - recruitment task</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<section className={styles.section}>
				<button onClick={changeToPreviousUser} className={styles["switch-button"]}>
					Previous user
				</button>
				<div>
					<p>{`${userIndex + 1}/${data.length}`}</p>
					<UserCard>{data[userIndex]}</UserCard>
				</div>

				<button onClick={changeToNextUser} className={styles["switch-button"]}>
					Next user
				</button>
			</section>
		</div>
	);
};

export default Home;
