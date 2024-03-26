import { FC, useEffect } from "react";
import Text from "./components/Text/Text";
import { GlobalStyle } from "./styles";
import Search from "./components/Search/Search";
import { useAppDispatch } from "./hooks";
import { getPosts } from "./features/posts.slice";
import Posts from "./components/Posts/Posts";

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Text />
      <Search />
      <Posts />
    </>
  );
};

export default App;
