import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { GlobalContainer } from "../../../styles";
import { PostColumn, PostColumns, StyledInner } from "./Posts.styles";
import Post from "./Post/Post";
import { getPosts } from "../../../features/posts.slice";

const Posts: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const [columns, setColumns] = useState<number[][]>([]);
  const getColumns = () => {
    if (!posts) return [[1], [1]];
    const oddNumbers: number[] = [];
    const evenNumbers: number[] = [];

    for (let i = 1; i < posts.length; i++) {
      if (i % 2 !== 0) {
        oddNumbers.push(i);
      } else if (i !== 0) {
        evenNumbers.push(i);
      }
    }
    setColumns([oddNumbers, evenNumbers]);
  };
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  useEffect(() => {
    getColumns();
  }, [posts]);
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            {posts.length && <Post postId={0} />}
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
