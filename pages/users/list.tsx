import { User } from "../../lib/users";
import Link from "next/link";

const UsersList = ({ usersData }: any) =>
    usersData.map((user: User, index: number) => {
        const {
            fullName,
            username,
            email,
            avatar,
            address,
            phoneNumber,
            gender,
            age,
            images,
        } = user;

        const { city, street, zip } = address;

        return (
            <tr key={index}>
                <td>{fullName}</td>
                <td>{username}</td>
                <td>
                    <Link
                        href={{
                            pathname: "/users/card/[index]",
                            query: {
                                index,
                            },
                        }}
                    >
                        Details
                    </Link>
                </td>
            </tr>
        );
    });

export default UsersList;
