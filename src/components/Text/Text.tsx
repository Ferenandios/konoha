import { FC } from "react";
import Title from "./Title/Title";
import { GlobalContainer } from "../../styles";

const Text: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <GlobalContainer>
          <div>
            <Title />
          </div>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Text;
