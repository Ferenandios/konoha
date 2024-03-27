import { FC } from "react";
import { StyledInner } from "./Content.styles";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";
import Button from "./Button/Button";

const Content: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Title postId={postId} />
        <Subtitle postId={postId} />
        <Button />
      </StyledInner>
    </>
  );
};

export default Content;
