import { FC } from "react";
import Title from "./Title/Title";
import { GlobalContainer } from "../../styles";
import StyledInner from "./Text.styles";
import Subtitle from "./Subtitle/Subtitle";

const Text: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <GlobalContainer>
          <StyledInner>
            <Title />
            <Subtitle />
          </StyledInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Text;
