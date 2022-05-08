import { NextPage } from "next";
import { getFilteredUsers } from "../../lib/users";

import UsersList from "./list";

import styles from "../styles/Users.module.css";

const Users: NextPage = ({ usersData }: any) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Details (card)</th>
                </tr>
            </thead>
            <tbody>
                <UsersList usersData={usersData} />
            </tbody>
        </table>
    );
};

export async function getStaticProps() {
    const usersData = await getFilteredUsers(18, 65);

    console.log(usersData);

    return { props: { usersData } };
}

export default Users;
