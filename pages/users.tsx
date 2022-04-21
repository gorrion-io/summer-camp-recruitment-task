import { NextPage, GetStaticProps } from "next";
import { getAllUsers } from "../lib/users";
import styles from "../styles/users.module.css";

interface User {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    zip: string;
  }
  phoneNumber: string;
  gender: string;
  age: number;
  images: string[];
}

interface UsersPageProps {
  user: User;
}

const Users: NextPage<UsersPageProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.profileBox}>
            <img src={user.avatar} alt="User avatar" />
            <div className={styles.profileBoxInnerDiv}>
              <div className={styles.profileBoxInnerDivTop}>
                <h1 className={styles.userNameText}>{user.fullName}</h1>
                <h2 className={styles.userEmailText}>{user.email}</h2>
              </div>
              <div className={styles.profileBoxInnerDivBottom}>
                <div className={styles.userSexHolder}>
                  <div>
                    {user.gender.toUpperCase()}
                  </div>
                </div>
                <div className={styles.userAgeHolder}>
                  <div>
                    {user.age}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.addressBox}>
            <div className={styles.addressBoxContent}>
              <h1>{user.address.street}</h1>
              <h2>STREET</h2>
            </div>
            <div className={styles.addressBoxSeparator} />
            <div className={styles.addressBoxContent}>
              <h1>{user.address.city}</h1>
              <h2>CITY</h2>
            </div>
            <div className={styles.addressBoxSeparator} />
            <div className={styles.addressBoxContent}>
              <h1>{user.address.zip}</h1>
              <h2>ZIP CODE</h2> 
            </div>
          </div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.bottomButton}>
            <div>
              <a href={user.images[0]}>
                Image 1
              </a>
            </div>
          </div>
          <div className={styles.bottomButtonSeparator} />
          <div className={styles.bottomButton}>
            <div>
              <a href={user.images[1]}>
                Image 2
              </a>
            </div>
          </div>
          <div className={styles.bottomButtonSeparator} />
          <div className={styles.bottomButton}>
            <div>
              <a href={user.images[2]}>
                Image 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  const users = await getAllUsers();
  const user = users[0] as User;

  return {
    props: {
      user: user,
    },
  }
}

export default Users;
