import { FC } from "react";
import { ButtonInner, StyledButton } from "./Button.styles";
import Rates from "../Title/Rates/Rates";

const Button: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const handleMouseUp = () => {
    alert(true);
  };
  return (
    <>
      <ButtonInner onMouseUp={handleMouseUp} index={postId}>
        {postId && <Rates postId={postId} />}
        <StyledButton>Читать далее</StyledButton>
      </ButtonInner>
    </>
  );
};

export default Button;
