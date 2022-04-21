import React from 'react';
import styles from './UserCard.module.css';
import Head from "next/head";
import AddressDetail from "../address-detail/AddressDetail";
import Chip from "../chip/Chip";

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
                        <img
                            src={'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg'}
                            alt={'avatar'}
                            height={56}
                            width={56}
                            className={styles.avatar}
                        />
                        <div className={styles.credentialsRightContainer}>
                            <div style={{margin: '8px 0'}}>
                                <h4 className={styles.username}>Ronald Richards</h4>
                                <label className={styles.email}>ronald.richards@example.com</label>
                            </div>
                            <div className={styles.chipsContainer}>
                                <Chip
                                    value={"Male"}
                                    chipStyle={{borderColor: '#D1FAE5', color: '#065F46', backgroundColor: '#ECFDF5'}}
                                />
                                <Chip
                                    value={34}
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
                        <AddressDetail label={'street'} value={'Crown Point'}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'city'} value={'Austin'}/>
                        <div className={styles.horizontalDivider}/>
                        <AddressDetail label={'zip code'} value={'73301'}/>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <span className={styles.bottomLabel}>
                        <a href="https://www.google.com">
                            Image 1
                        </a>
                    </span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>
                        <a href="https://www.google.com">
                            Image 2
                        </a>
                    </span>
                    <div className={styles.verticalDivider}/>
                    <span className={styles.bottomLabel}>
                        <a href="https://www.google.com">
                            Image 3
                        </a>
                    </span>
                </div>
            </div>
        </>
    );
}

export default UserCard;

