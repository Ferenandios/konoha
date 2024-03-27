import { FC } from "react";
import Image from "./Image/Image";
import Content from "./Content/Content";
import { StyledInner } from "./Post.styles";

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
