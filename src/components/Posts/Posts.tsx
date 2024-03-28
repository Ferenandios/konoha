import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { GlobalContainer } from "../../styles";
import { PostColumn, PostColumns, StyledInner } from "./Posts.styles";
import Post from "./Post/Post";

const Posts: FC = (): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  const columns = ((): number[][] => {
    const oddNumbers: number[] = [];
    const evenNumbers: number[] = [];

    for (let i = 1; i < posts.length; i++) {
      if (i % 2 !== 0) {
        oddNumbers.push(i);
      } else if (i !== 0) {
        evenNumbers.push(i);
      }
    }

    return [oddNumbers, evenNumbers];
  })();
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            <Post postId={0} />
            <PostColumns>
              {columns.map((column, index) => (
                <PostColumn key={index}>
                  {column.map((postId) => (
                    <Post key={postId} postId={postId} />
                  ))}
                </PostColumn>
              ))}
            </PostColumns>
          </StyledInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Posts;
