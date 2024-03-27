import { FC } from "react";
import { ButtonAnsoc, StyledButton } from "./Button.styles";

const Button: FC = (): JSX.Element => {
  const handleMouseUp = () => {
    alert(true);
  };
  return (
    <>
      <ButtonAnsoc onMouseUp={handleMouseUp}>
        <StyledButton>Читать далее</StyledButton>
      </ButtonAnsoc>
    </>
  );
};

export default Button;
