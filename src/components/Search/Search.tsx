import { FC } from "react";
import { GlobalContainer } from "../../styles";
import StyledInner from "./Search.styles";
import Input from "./Input/Input";

const Search: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            <Input />
          </StyledInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Search;
