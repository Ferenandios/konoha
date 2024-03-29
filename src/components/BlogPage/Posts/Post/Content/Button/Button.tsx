import { FC } from "react";
import { ButtonInner, StyledButton } from "./Button.styles";
import Rates from "../Title/Rates/Rates";
import { useAppDispatch } from "../../../../../../hooks";
import {
  setCurrentPost,
  setShowedPage,
} from "../../../../../../features/posts.slice";

const Button: FC<{ postId: number }> = ({ postId }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleMouseUp = () => {
    dispatch(setShowedPage("post"));
    dispatch(setCurrentPost(postId));
  };
  return (
    <>
      <ButtonInner index={postId}>
        {postId > 0 && <Rates postId={postId} />}
        <StyledButton onMouseUp={handleMouseUp}>Читать далее</StyledButton>
      </ButtonInner>
    </>
  );
};

export default Button;
