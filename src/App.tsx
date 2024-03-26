import { FC } from "react";
import Text from "./components/Text/Text";
import { GlobalStyle } from "./styles";

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Text />
    </>
  );
};

export default App;
