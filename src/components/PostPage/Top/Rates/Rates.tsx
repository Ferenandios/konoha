import { FC } from "react";
import { StyledInner } from "./Rates.styles";
import Rate from "./Rate/Rate";

const Rates: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Rate rateType="liked" postId={postId} />
        <Rate rateType="disliked" postId={postId} />
      </StyledInner>
    </>
  );
};

export default Rates;
