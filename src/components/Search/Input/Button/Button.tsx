import { FC } from "react";
import StyledButton, { ShapeIcon, StyledAnsoc } from "./Button.styles";

const Button: FC = (): JSX.Element => {
  const handleClick = () => {
    alert(true);
  };
  return (
    <>
      <StyledAnsoc>
        <StyledButton onClick={handleClick}>
          <ShapeIcon />
        </StyledButton>
      </StyledAnsoc>
    </>
  );
};

export default Button;
