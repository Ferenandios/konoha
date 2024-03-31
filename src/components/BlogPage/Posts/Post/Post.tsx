import { FC } from "react";
import Image from "./Image/Image";
import Content from "./Content/Content";
import { StyledInner } from "./Post.styles";
import { useAppSelector } from "../../../../hooks";

const Post: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  return (
    <>
      <StyledInner type={posts[0].id === postId + 1 ? "bigPost" : "smallPost"}>
        <Image postId={postId} />
        <Content postId={postId} />
      </StyledInner>
    </>
  );
};

export default Post;
