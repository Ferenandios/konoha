import { FC } from "react";
import { StyledInner, StyledTitle } from "./Title.styles";
import Rates from "./Rates/Rates";
import { useAppSelector } from "../../../../../../hooks";

const Title: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { title } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <StyledInner>
        <StyledTitle index={postId}>{title}</StyledTitle>
        {!postId && <Rates postId={postId} />}
      </StyledInner>
    </>
  );
};

export default Title;
