import { FC } from "react";
import { GlobalContainer } from "../../../styles";
import Button from "./Button/Button";
import { TopInner } from "./Top.styles";
import Rates from "./Rates/Rates";
import { useAppSelector } from "../../../hooks";

const Top: FC = (): JSX.Element => {
  const { currentPost } = useAppSelector((state) => state.posts);
  return (
    <>
      <section>
        <GlobalContainer>
          <TopInner>
            <Button />
            {currentPost !== null && <Rates postId={currentPost} />}
          </TopInner>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Top;
