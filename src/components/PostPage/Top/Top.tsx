import { FC } from "react";
import { GlobalContainer } from "../../../styles";
import Button from "./Button/Button";
import { TopInner } from "./Top.styles";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <GlobalContainer>
          <TopInner>
            <Button />
          </TopInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Top;
