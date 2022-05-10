import CardHeader from "./card/CardHeader";
import CardBlock from "./card/CardBlock";
import CardFooter from "./card/CardFooter";

import { IUserProps } from "../../interfaces/IUserProps.interface";

const UserCard = ({ userData }: IUserProps) => {
    const { address, age, avatar, email, fullName, gender, images, username } =
        userData;

    const personality = {
        address,
        age,
        avatar,
        email,
        fullName,
        gender,
        username,
    };

    return (
        <div className="wrapper">
            <article className="card">
                <CardHeader personality={personality} />
                <CardBlock address={address} />
                <CardFooter images={images} />
            </article>
        </div>
    );
};

export default UserCard;
