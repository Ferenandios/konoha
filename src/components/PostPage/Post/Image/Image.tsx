import { FC } from "react";
import { ImageAnsoc, StyledImage } from "./Image.styles";
import { useAppSelector } from "../../../../hooks";

const Image: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { image } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <ImageAnsoc>
        <StyledImage image={image} />
      </ImageAnsoc>
    </>
  );
};

export default Image;
