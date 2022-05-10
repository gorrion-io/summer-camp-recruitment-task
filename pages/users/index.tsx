import { NextPage } from "next";
import { getFilteredUsers } from "../../lib/users";

import UserCard from "./card";

import { IUsersArrayProps } from "../../interfaces/IUserProps.interface";
import { IUser } from "../../interfaces/IUser.interface";

const Users = ({ usersDataArray }: IUsersArrayProps) => {
    const randomizeUserDataIndex = (usersDataArray: Array<IUser>): number => {
        return Math.floor(Math.random() * (usersDataArray.length - 1));
    };

    const selectRandomUserCard = (usersDataArray: Array<IUser>): IUser => {
        return usersDataArray[randomizeUserDataIndex(usersDataArray)];
    };

    return <UserCard userData={selectRandomUserCard(usersDataArray)} />;
};

export async function getStaticProps() {
    const usersDataArray = await getFilteredUsers(18, 65);

    console.log(usersDataArray);

    return { props: { usersDataArray } };
}

export default Users;
