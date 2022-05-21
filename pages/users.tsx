import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllUsers, User } from "../lib/users";
import { Card } from "../components/Card";
import styles from "../styles/Users.module.css";

const Users: NextPage = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getAllUsers().then((users) => setUsers(users));
	}, []);

	function printUsers() {
		const testBatch = users.slice(users.length - 5);
		return testBatch.map((user: User) => <Card user={user} />);
	}
	return <div className={styles.container}>{printUsers()}</div>;
};

export default Users;
