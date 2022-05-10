import { IFooterElementProps } from "../../../interfaces/IUserProps.interface";

const FooterImageElement = ({ path, number }: IFooterElementProps) => {
    return (
        <div className="card__footer footer-image">
            <a
                className="card__footer footer-image__link"
                href={path}
                target="_blank"
                rel="noreferrer"
            >
                Image {number}
            </a>
        </div>
    );
};

export default FooterImageElement;
