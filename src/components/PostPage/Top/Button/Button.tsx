import { FC } from "react";
import { ButtonImg, ButtonSpan, StyledButton } from "./Button.styles";
import { useAppDispatch } from "../../../../hooks";
import { setShowedPage } from "../../../../features/posts.slice";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleMouseUp = () => {
    dispatch(setShowedPage("blog"));
  };
  return (
    <>
      <StyledButton onMouseUp={handleMouseUp}>
        <ButtonSpan>
          <ButtonImg />
          <p>Вернуться к статьям</p>
        </ButtonSpan>
      </StyledButton>
    </>
  );
};

export default Button;
