import { FC } from "react";
import BlogPage from "./components/BlogPage";
import { useAppSelector } from "./hooks";
import { GlobalStyle } from "./styles";

const App: FC = (): JSX.Element => {
  const { showedPage } = useAppSelector((state) => state.posts);
  return (
    <>
      <GlobalStyle />
      {showedPage === "blog" && <BlogPage />}
    </>
  );
};

export default App;
