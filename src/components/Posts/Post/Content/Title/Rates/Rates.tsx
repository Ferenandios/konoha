import { FC } from "react";
import { StyledInner } from "./Rates.styles";
import Rate from "./Rate/Rate";
import { useAppSelector } from "../../../../../../hooks";

const Rates: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { rates } = useAppSelector((state) => state.posts.posts[postId]);
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
            <Rate type="likes" postId={postId} />
            <Rate type="dislikes" postId={postId} />
          </>
        )}
      </StyledInner>
    </>
  );
};

export default Rates;
