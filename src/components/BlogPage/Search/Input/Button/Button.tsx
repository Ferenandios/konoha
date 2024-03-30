import { FC } from "react";
import StyledButton, { ShapeIcon, StyledAnsoc } from "./Button.styles";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { setFilteredPosts } from "../../../../../features/posts.slice";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, search } = useAppSelector((state) => state.posts);
  const handleClick = () => {
    dispatch(setFilteredPosts(posts.filter((post) => post.title === search)));
  };
  return (
    <>
      <StyledAnsoc>
        <StyledButton onMouseUp={handleClick}>
          <ShapeIcon />
        </StyledButton>
      </StyledAnsoc>
    </>
  );
};

export default Button;
