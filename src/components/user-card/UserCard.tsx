import React from 'react';
import styles from './UserCard.module.css';

const UserCard: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>

            </div>
            <div className={styles.bottomContainer}>
                <span className={styles.bottomLabel}>Image 1</span>
                <div className={styles.verticalDivider}/>
                <span className={styles.bottomLabel}>Image 2</span>
                <div className={styles.verticalDivider}/>
                <span className={styles.bottomLabel}>Image 3</span>
            </div>
        </div>
    );
}

export default UserCard;

