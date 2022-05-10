import { IAddressProps } from "../../../interfaces/IUserProps.interface";

const CardBlock = ({ address }: IAddressProps) => {
    const { city, street, zip } = address;

    return (
        <div className="card card__block">
            <section className="card__block address-section">
                <h3 className="address-section address-section__content">
                    {street}
                </h3>
                <h3 className="address-section address-section__label">
                    Street
                </h3>
            </section>
            <section className="card__block address-section">
                <h3 className="address-section address-section__content">
                    {city}
                </h3>
                <h3 className="address-section address-section__label">City</h3>
            </section>
            <section className="card__block address-section">
                <h3 className="address-section address-section__content">
                    {zip}
                </h3>
                <h3 className="address-section address-section__label">
                    Zip Code
                </h3>
            </section>
        </div>
    );
};

export default CardBlock;
