import { FC } from "react";
import { StyledTitle, TitleAnsoc } from "./Title.styles";
import { useAppSelector } from "../../../../hooks";

const Title: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const { title } = useAppSelector((state) => state.posts.posts[postId]);
  return (
    <>
      <TitleAnsoc>
        <StyledTitle>{title}</StyledTitle>
      </TitleAnsoc>
    </>
  );
};

export default Title;
