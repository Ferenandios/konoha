import { FC } from "react";
import { RateButton, RateCount, RateInner } from "./Rate.styles";
import RateIcon from "./RateIcon/RateIcon";
import { type IRateProps } from "../../../../../../../types/types";
import { useAppSelector } from "../../../../../../../hooks";

const Rate: FC<{ type: "likes" | "dislikes"; postId: number }> = ({
  postId,
  type,
}): JSX.Element => {
  const { userRate } = useAppSelector((state) => state.posts.posts[postId]);
  const count = useAppSelector(
    (state) => state.posts.posts[postId].rates[type]
  );

  const handleMouseUp = () => {
    alert(false);
  };

  /* КАКАЯ-ТО НЕВНЯТНАЯ ХЕРЬ КАПАЙСЯ В СВОИХ ПРОПСАХ ЧЕЛИК ГУД ЛАК */

  return (
    <>
      <RateInner>
        <RateButton onMouseUp={handleMouseUp}>
          <RateIcon type={type} userRate={userRate} />
        </RateButton>
        <RateCount>{count}</RateCount>
      </RateInner>
    </>
  );
};

export default Rate;
