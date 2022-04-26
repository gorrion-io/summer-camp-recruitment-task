import React from "react";
import card from "../styles/Card.module.scss";

interface Iuser {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  phoneNumber: string;
  gender: "Male" | "Female";
  age: number;
  images: string[];
}

interface Props {
  user: Iuser;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className={card.background}>
      <div className={card.card}>
        <div className={card.header}>
          <div className={card.header__image}>
            <img src={user.avatar} />
          </div>
          <div className={card.header__information}>
            <h4 className={card.header__fullname}> {user.fullName}</h4>
            <label className={card.header__email}>{user.email}</label>
          </div>

          <div className={card.header__containers}>
            <label className={card.container__green}>{user.gender}</label>
            <label className={card.container__gray}> {user.age}</label>
          </div>
        </div>
        <div className={card.main}>
          <div className={card.info}>
            <div className={card.info__data}> {user.address.street}</div>
            <div className={card.info__prop}>Street</div>
          </div>
          <span className={card.horizontalLine}></span>
          <div className={card.info}>
            <div className={card.info__data}> {user.address.city}</div>
            <div className={card.info__prop}>City</div>
          </div>
          <span className={card.horizontalLine}></span>
          <div className={card.info}>
            <div className={card.info__data}> {user.address.zip}</div>
            <div className={card.info__prop}>Zip Code</div>
          </div>
        </div>
        <div className={card.footer}>
          {user.images.map((elem: string, index: number) => (
            <button
              className={card.footer__item}
              key={`${card.fullName} ${index + 1}`}
            >
              <a href={elem}>Image {index + 1} </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
