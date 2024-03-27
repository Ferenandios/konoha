import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { GlobalContainer } from "../../styles";
import { StyledInner } from "./Posts.styles";
import Post from "./Post/Post";

const Posts: FC = (): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            {posts.map((post) => (
              <Post key={post.id} postId={post.id} />
            ))}
          </StyledInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Posts;
