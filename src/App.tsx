import { FC } from "react";
import Text from "./components/Text/Text";
import { GlobalStyle } from "./styles";
import Search from "./components/Search/Search";
import Posts from "./components/Posts/Posts";

const App: FC = (): JSX.Element => {
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
