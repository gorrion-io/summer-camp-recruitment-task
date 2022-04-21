import React from 'react';
import styles from './UserCard.module.css';
import Head from "next/head";
import AddressDetail from "../address-detail/AddressDetail";

const UserCard: React.FC = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.credentialsContainer}>

                    </div>
                    <div className={styles.addressContainer}>
                        <AddressDetail label={'street'} value={'Crown Point'}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'city'} value={'Austin'}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'zip code'} value={'73301'}/>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <span className={styles.bottomLabel}>Image 1</span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>Image 2</span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>Image 3</span>
                </div>
            </div>
        </>
    );
}

export default UserCard;

