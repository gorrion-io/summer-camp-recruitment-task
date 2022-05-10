import FooterImageElement from "./FooterImageElement";

import { IImagesProps } from "../../../interfaces/IUserProps.interface";

const CardFooter = ({ images }: IImagesProps) => {
    const generateFooterImageElements = (images: Array<string>) =>
        images.map((image, index) => {
            return (
                <FooterImageElement key={index} path={image} number={index} />
            );
        });

    return (
        <footer className="card card__footer">
            {generateFooterImageElements(images)}
        </footer>
    );
};

export default CardFooter;
