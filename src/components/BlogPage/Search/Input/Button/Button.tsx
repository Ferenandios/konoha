import { FC } from "react";
import StyledButton, { ShapeIcon, StyledAnsoc } from "./Button.styles";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <StyledAnsoc>
        <StyledButton>
          <ShapeIcon />
        </StyledButton>
      </StyledAnsoc>
    </>
  );
};

export default Button;
