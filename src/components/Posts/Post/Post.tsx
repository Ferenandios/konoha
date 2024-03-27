import { FC } from "react";
import { StyledInner } from "../Posts.styles";
import Image from "./Image/Image";
import { type IPost } from "../../../types/types";
import Content from "./Content/Content";

const Post: FC<{ post: IPost }> = ({ post }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Image image={post.image} />
        <Content body={post.body} title={post.title} rates={post.rates} />
      </StyledInner>
    </>
  );
};

export default Post;
