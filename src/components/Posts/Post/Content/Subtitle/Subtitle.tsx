import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import { StyledText } from "./Subtitle.styles";

const Subtitle: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { body } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <StyledText>{body}</StyledText>
    </>
  );
};

export default Subtitle;
