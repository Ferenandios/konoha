import { FC } from "react";
import { ImageAnsoc, PostImage } from "./Image.styles";

const Image: FC<{ image: string }> = ({ image }): JSX.Element => {
  return (
    <>
      <ImageAnsoc>
        <PostImage image={image} />
      </ImageAnsoc>
    </>
  );
};

export default Image;
