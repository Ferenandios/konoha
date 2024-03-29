import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { GlobalContainer } from "../../../styles";
import { PostInner } from "./Post.styles";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Text from "./Text/Text";

const Post: FC = (): JSX.Element => {
  const { currentPost } = useAppSelector((state) => state.posts);
  return (
    <>
      {currentPost !== null && (
        <section>
          <GlobalContainer>
            <PostInner>
              <Title postId={currentPost} />
              <Image postId={currentPost} />
              <Text postId={currentPost} />
            </PostInner>
          </GlobalContainer>
        </section>
      )}
    </>
  );
};

export default Post;
