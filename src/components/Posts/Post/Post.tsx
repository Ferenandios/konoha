import { FC } from "react";
import { StyledInner } from "../Posts.styles";
import Image from "./Image/Image";
import { type IPost } from "../../../types/types";

const Post: FC<{ post: IPost }> = ({ post }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Image image={post.image} />
      </StyledInner>
    </>
  );
};

export default Post;
