import { NextPage } from "next";
import { useRouter } from "next/router";

const UserCard: NextPage = () => {
    const router = useRouter();
    const {
        query: {
            fullName,
            username,
            email,
            avatar,
            address,
            phoneNumber,
            gender,
            age,
            images,
        },
    } = router;

    console.log(fullName);
    if (username) {
        return (
            <div>
                <h2>{fullName}</h2>
                <h2>{username}</h2>
            </div>
        );
    } else
        return (
            <div>
                <h2>.........</h2>
            </div>
        );
};

UserCard.getInitialProps = ({
    query: {
        fullName,
        username,
        email,
        avatar,
        address,
        phoneNumber,
        gender,
        age,
        images,
    },
}) => {
    return {
        query: {
            fullName,
            username,
            email,
            avatar,
            address,
            phoneNumber,
            gender,
            age,
            images,
        },
    };
};

export default UserCard;
