import { FC } from "react";
import Text from "./components/Text/Text";
import { GlobalStyle } from "./styles";
import Search from "./components/Search/Search";

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Text />
      <Search />
    </>
  );
};

export default App;
