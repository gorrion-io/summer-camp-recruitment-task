import React from 'react';
import styles from './UserCard.module.css';
import Head from "next/head";
import AddressDetail from "../address-detail/AddressDetail";
import Chip from "../chip/Chip";
import {UserCardProps} from "./UserCardProps";

const UserCard: React.FC<UserCardProps> = (props) => {
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
                        <img
                            src={props.user.avatar}
                            alt={'avatar'}
                            height={56}
                            width={56}
                            className={styles.avatar}
                        />
                        <div className={styles.credentialsRightContainer}>
                            <div style={{margin: '8px 0'}}>
                                <h4 className={styles.username}>{props.user.fullName}</h4>
                                <label className={styles.email}>{props.user.email}</label>
                            </div>
                            <div className={styles.chipsContainer}>
                                <Chip
                                    value={props.user.gender}
                                    chipStyle={{borderColor: '#D1FAE5', color: '#065F46', backgroundColor: '#ECFDF5'}}
                                />
                                <Chip
                                    value={props.user.age}
                                    chipStyle={{
                                        borderColor: '#E9E9E9',
                                        color: '#303030',
                                        margin: '0 0 0 8px',
                                        backgroundColor: '#F6F6F6'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.addressContainer}>
                        <AddressDetail label={'street'} value={props.user.address.street}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'city'} value={props.user.address.city}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'zip code'} value={props.user.address.zip}/>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <span className={styles.bottomLabel}>
                        <a href={props.user.images[0]}>
                            Image 1
                        </a>
                    </span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>
                        <a href={props.user.images[1]}>
                            Image 2
                        </a>
                    </span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>
                        <a href={props.user.images[2]}>
                            Image 3
                        </a>
                    </span>
                </div>
            </div>
        </>
    );
}

export default UserCard;

