import { NextPage } from "next";
import Image from "next/image";

import IUser from "../../interfaces/IUser.interface";

const UserCard: NextPage = () => {
    return (
        <div className="wrapper">
            <article className="card">
                <header className="card card__header">
                    <section className="card__header header-avatar">
                        <Image
                            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1036.jpg"
                            alt="Lillian.Smith25"
                            className="header-avatar__avatar"
                            width={56}
                            height={56}
                        />
                    </section>
                    <section className="card__header header-data">
                        <div className="header-data header-data__text-group">
                            <h2 className="header-data__text header-data__text--name">Olga Block</h2>
                            <h3 className="header-data__text header-data__text--email">
                                Norbert_Koch@gmail.com
                            </h3>
                        </div>
                        <div className="header-data header-data__tag-group">
                            <span className="header-data__tag header-data__tag--gender">Female</span>
                            <span className="header-data__tag header-data__tag--age">33</span>
                        </div>
                    </section>
                </header>
                <div className="card card__block">
                    <section className="card__block address-section">
                        <h3 className="address-section address-section__content">
                            Hamill Motorway
                        </h3>
                        <h3 className="address-section address-section__label">
                            Street
                        </h3>
                    </section>
                    <section className="card__block address-section">
                        <h3 className="address-section address-section__content">
                            Uptonhaven
                        </h3>
                        <h3 className="address-section address-section__label">
                            City
                        </h3>
                    </section>
                    <section className="card__block address-section">
                        <h3 className="address-section address-section__content">
                            57265
                        </h3>
                        <h3 className="address-section address-section__label">
                            Zip Code
                        </h3>
                    </section>
                </div>
                <footer className="card card__footer">
                    <div className="card__footer footer-image">
                        <a
                            className="footer-image footer-image__link"
                            href="http://loremflickr.com/640/480/nature"
                        >
                            Image 1
                        </a>
                    </div>
                    <div className="card__footer footer-image">
                        <a
                            className="footer-image footer-image__link"
                            href="http://loremflickr.com/640/480/nature"
                        >
                            Image 1
                        </a>
                    </div>
                    <div className="card__footer footer-image">
                        <a
                            className="footer-image footer-image__link"
                            href="http://loremflickr.com/640/480/nature"
                        >
                            Image 1
                        </a>
                    </div>
                </footer>
            </article>
        </div>
    );
};

export default UserCard;
