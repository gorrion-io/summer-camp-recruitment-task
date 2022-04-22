import {NextPage} from "next";
import {useEffect, useState} from "react";
import styles from '../styles/Users.module.css';
import UserCard from "../src/components/user-card/UserCard";
import {User} from "../lib/users";
import {getAllUsers} from "../lib/users";

const Users: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>()

    useEffect(() => {
        document.body.classList.add(styles.background);

        async function users() {
            const allUsers = await getAllUsers()
            setUsers(allUsers);
            setUser(allUsers[0]);
        }

        users()
    }, [])

    const handleNext = () => {
        if (lastUser()) return;
        setUser(users[users.indexOf(user as User) + 1]);
    }

    const handlePrevious = () => {
        if (firstUser()) return;
        setUser(users[users.indexOf(user as User) - 1]);
    }

    const firstUser = () => {
        return users.indexOf(user as User) === 0;
    }

    const lastUser = () => {
        return users.indexOf(user as User) + 1 === users.length;
    }

    return (
        <div className={styles.mainContainer}>
            <img
                src={'/assets/arrowInvert.svg'}
                alt={'previous user'}
                className={`${styles.arrow}`}
                style={firstUser() || !users.length ? {opacity: 0} : undefined}
                onClick={handlePrevious}
            />
            {user ? <UserCard user={user}/> : 'loading ...'}
            <img
                src={'/assets/arrow.svg'}
                alt={'previous user'}
                className={styles.arrow}
                onClick={handleNext}
                style={lastUser() ? {opacity: 0} : undefined}
            />
        </div>
    );
};

export default Users;
