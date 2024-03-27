import { FC } from "react";
import { StyledInner } from "../Posts.styles";
import Image from "./Image/Image";
import { type IPost } from "../../../types/types";
import Content from "./Content/Content";

const Post: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Image postId={postId} />
        <Content postId={postId} />
      </StyledInner>
    </>
  );
};

export default Post;
