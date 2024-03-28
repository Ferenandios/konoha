import { FC } from "react";
import TextInput, { StyledDiv } from "./Input.styles";
import Button from "./Button/Button";

const Input: FC = (): JSX.Element => {
  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    alert(true);
  };
  return (
    <>
      <StyledDiv>
        <TextInput onKeyUp={handleKeyUp} />
        <Button />
      </StyledDiv>
    </>
  );
};

export default Input;
