import { FC } from "react";
import { setSearch } from "../../../../features/posts.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import Button from "./Button/Button";
import TextInput, { StyledDiv } from "./Input.styles";

const Input: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.posts);
  return (
    <>
      <StyledDiv>
        <TextInput
          value={search}
          onChange={(event) => {
            dispatch(setSearch(event.target.value));
          }}
        />
        <Button />
      </StyledDiv>
    </>
  );
};

export default Input;
