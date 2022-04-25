import React from "react";
import Image from "next/image";
import styles from "../styles/User.module.scss";

function UserAddressField(props: any) {
  return (
    <div>
      <h5 className={styles.addressValue}>{props.value}</h5>
      <div className={styles.addressLabel}>{props.label}</div>
    </div>
  );
}

export default function UserCard(props: any) {
  const { user } = props;
  const imgSliced: string[] = user.images.slice(0, 3);

  return (
    <div className={styles.userContainer}>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userInfo}>
          <div className={styles.userImg}>
            <Image
              src={user.avatar}
              alt="User avatar"
              className={styles.img}
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <h4 className={styles.userName}>{user.fullName}</h4>
            <p className={styles.userMail}>{user.email}</p>
            <div className={styles.userInfoLabels}>
              <div className={styles.userInfoGender}>{user.gender}</div>
              <div className={styles.userInfoAge}>{user.age}</div>
            </div>
          </div>
        </div>
        <div className={styles.userAddress}>
          <UserAddressField value={user.address.street} label="street" />
          <UserAddressField value={user.address.city} label="city" />
          <UserAddressField value={user.address.zip} label="zip code" />
        </div>
      </div>

      <div className={styles.userImages}>
        {imgSliced.map((img: string) => {
          return (
            <div className={styles.userImage}>
              <Image src={img} alt="User image" width="100%" height="100%" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
