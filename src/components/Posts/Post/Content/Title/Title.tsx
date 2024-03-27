import { FC } from "react";
import { StyledInner, StyledTitle } from "./Title.styles";
import Rates from "./Rates/Rates";
import { IPostTitleProps } from "../../../../../types/types";
import { useAppSelector } from "../../../../../hooks";

const Title: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { title } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <StyledInner>
        <StyledTitle>{title}</StyledTitle>
        <Rates postId={postId} />
      </StyledInner>
    </>
  );
};

export default Title;
