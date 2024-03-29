import { FC } from "react";
import { StyledText, TextAnsoc } from "./Text.styles";
import { useAppSelector } from "../../../../hooks";

const Text: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { body } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <TextAnsoc>
        <StyledText>{body}</StyledText>
      </TextAnsoc>
    </>
  );
};

export default Text;
