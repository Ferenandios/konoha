import { FC } from "react";
import { GlobalContainer } from "../../../styles";
import Subtitle from "./Subtitle/Subtitle";
import StyledInner from "./Text.styles";
import Title from "./Title/Title";

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
