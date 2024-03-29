import { FC, useEffect } from "react";
import { setShowedPage } from "../../features/posts.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Top from "./Top/Top";
import Post from "./Post/Post";
import { StyledPostPage } from "./PostPage.styles";

const PostPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { currentPost } = useAppSelector((state) => state.posts);
  useEffect(() => {
    if (currentPost !== null) return;
    dispatch(setShowedPage("blog"));
  }, []);
  return (
    <>
      <StyledPostPage>
        <Top />
        <Post />
      </StyledPostPage>
    </>
  );
};

export default PostPage;
