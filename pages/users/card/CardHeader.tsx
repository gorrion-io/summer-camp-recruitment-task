import Image from "next/image";

import { IPersonalityProps } from "../../../interfaces/IUserProps.interface";

const CardHeader = ({ personality }: IPersonalityProps) => {
    const { age, avatar, email, gender, fullName, username } = personality;

    return (
        <header className="card card__header">
            <section className="card__header header-avatar">
                <Image
                    priority={true}
                    src={avatar}
                    alt={username}
                    layout="fixed"
                    className="header-avatar__avatar"
                    width={56}
                    height={56}
                />
            </section>
            <section className="card__header header-data">
                <div className="header-data header-data__text-group">
                    <h2 className="header-data__text header-data__text--name">
                        {fullName}
                    </h2>
                    <h3 className="header-data__text header-data__text--email">
                        {email}
                    </h3>
                </div>
                <div className="header-data header-data__tag-group">
                    <span className="header-data__tag header-data__tag--gender">
                        {gender}
                    </span>
                    <span className="header-data__tag header-data__tag--age">
                        {age}
                    </span>
                </div>
            </section>
        </header>
    );
};

export default CardHeader;
