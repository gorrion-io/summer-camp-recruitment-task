import { FC } from "react";
import { ImageLink } from "./ImageLink.style";
import { UserImagesContainer } from "./UserImagesContainer.style";

interface Props {
  images: string[];
}

const UserImages: FC<Props> = ({ images }) => {
  return (
    <UserImagesContainer>
      {images.map((src, index) => (
        <ImageLink href={src} target="_blank">
          Image {index + 1}
        </ImageLink>
      ))}
    </UserImagesContainer>
  );
};

export default UserImages;
