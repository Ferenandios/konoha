import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { GlobalContainer } from "../../../styles";
import { PostColumn, PostColumns, StyledInner } from "./Posts.styles";
import Post from "./Post/Post";
import { getPosts } from "../../../features/posts.slice";
import { IPost } from "../../../types/types";

const Posts: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, search } = useAppSelector((state) => state.posts);
  const [columns, setColumns] = useState<IPost[][]>([]);
  const filteredPosts = posts.filter((post) =>
    search === "" ? post : post.title === search
  );
  const getColumns = () => {
    if (!posts.length) return;
    const oddPosts: IPost[] = [];
    const evenPosts: IPost[] = [];

    for (let i = 1; i < posts.length; i++) {
      if (i % 2 !== 0) {
        oddPosts.push(posts[i]);
      } else if (i !== 0) {
        evenPosts.push(posts[i]);
      }
    }
    setColumns([oddPosts, evenPosts]);
  };
  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, []);
  useEffect(() => {
    getColumns();
  }, [posts]);
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            {posts[0] !== undefined && (
              <>
                {(!search || search === posts[0].title) && <Post postId={0} />}
                <PostColumns>
                  {filteredPosts.length ? (
                    <>
                      {columns.map((column, index) => (
                        <PostColumn key={index}>
                          {column
                            .filter((post) =>
                              search === "" ? post : post.title === search
                            )
                            .map((post) => (
                              <Post key={post.id} postId={post.id - 1} />
                            ))}
                        </PostColumn>
                      ))}
                    </>
                  ) : (
                    <>
                      <h3>No post found</h3>
                    </>
                  )}
                </PostColumns>
              </>
            )}
          </StyledInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Posts;
