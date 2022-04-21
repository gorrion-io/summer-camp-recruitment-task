import {NextPage} from "next";
import {useEffect, useState} from "react";
import styles from '../styles/Users.module.css';
import UserCard from "../src/components/user-card/UserCard";

const Users: NextPage = () => {
    useEffect(() => {
        document.body.classList.add(styles.background);
    }, [])


    return (
        <div className={styles.mainContainer}>
            <UserCard/>
        </div>
    );
};

export default Users;
