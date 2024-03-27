import { FC } from "react";
import { StyledInner } from "./Rates.styles";
import { type IRates, type userRateType } from "../../../../../../types/types";
import Rate from "./Rate/Rate";
import { useAppSelector } from "../../../../../../hooks";

const getRandomNumber = () => Math.floor(Math.random() * 51);

const Rates: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { rates, userRate } = useAppSelector(
    (state) => state.posts.posts[postId]
  );
  return (
    <>
      <StyledInner>
        {rates ? (
          <>
            <Rate type="likes" postId={postId} />
            <Rate type="dislikes" postId={postId} />
          </>
        ) : (
          <>
            <Rate type="likes" count={getRandomNumber()} />
            <Rate type="dislikes" count={getRandomNumber()} />
          </>
        )}
      </StyledInner>
    </>
  );
};

export default Rates;
