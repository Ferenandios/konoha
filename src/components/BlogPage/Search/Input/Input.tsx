import { FC } from "react";
import { setFilteredPosts, setSearch } from "../../../../features/posts.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import Button from "./Button/Button";
import TextInput, { StyledDiv } from "./Input.styles";

const Input: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { search, posts } = useAppSelector((state) => state.posts);
  return (
    <>
      <StyledDiv>
        <TextInput
          value={search}
          onChange={(event) => {
            if (event.target.value === "") {
              dispatch(setFilteredPosts([]));
            }
            dispatch(setSearch(event.target.value));
          }}
          onKeyUp={(event: KeyboardEvent) => {
            if (event.key !== "Enter") return;
            dispatch(
              setFilteredPosts(posts.filter((post) => post.title === search))
            );
          }}
        />
        <Button />
      </StyledDiv>
    </>
  );
};

export default Input;
