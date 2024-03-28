import { FC } from "react";
import { ImageAnsoc, PostImage } from "./Image.styles";
import { useAppSelector } from "../../../../../hooks";

const Image: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { image } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <ImageAnsoc>
        <PostImage image={image} />
      </ImageAnsoc>
    </>
  );
};

export default Image;
