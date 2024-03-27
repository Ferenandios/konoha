import { FC } from "react";
import { RateButton, RateCount, RateInner } from "./Rate.styles";
import RateIcon from "./RateIcon/RateIcon";
import { useAppSelector } from "../../../../../../../hooks";

const Rate: FC<{ type: "likes" | "dislikes"; postId: number }> = ({
  postId,
  type,
}): JSX.Element => {
  const { userRate } = useAppSelector((state) => state.posts.posts[postId]);
  const { rates } = useAppSelector((state) => state.posts.posts[postId]);
  const getRandomNumber = () => Math.floor(Math.random() * 51);
  const count = rates ? rates[type] : getRandomNumber();
  const handleMouseUp = () => {
    alert(false);
  };
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
