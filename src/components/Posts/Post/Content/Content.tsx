import { FC } from "react";
import { type IContentProps } from "../../../../types/types";
import { StyledInner } from "./Content.styles";
import Title from "./Title/Title";

const Content: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Title postId={postId} />
      </StyledInner>
    </>
  );
};

export default Content;
