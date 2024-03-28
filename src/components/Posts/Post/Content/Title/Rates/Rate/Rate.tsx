import { FC, useEffect } from "react";
import { RateButton, RateCount, RateInner } from "./Rate.styles";
import RateIcon from "./RateIcon/RateIcon";
import { useAppDispatch, useAppSelector } from "../../../../../../../hooks";
import {
  createPostRates,
  setPostRates,
  setPostUserRate,
} from "../../../../../../../features/posts.slice";

const Rate: FC<{ rateType: "liked" | "disliked"; postId: number }> = ({
  postId,
  rateType,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { userRate } = useAppSelector((state) => state.posts.posts[postId]);
  const { rates } = useAppSelector((state) => state.posts.posts[postId]);
  const handleMouseUp = () => {
    dispatch(
      setPostRates({
        type: rateType !== userRate ? "add" : "remove",
        rateType: rateType,
        postId: postId,
      })
    );
    dispatch(setPostUserRate({ type: rateType, postId: postId }));
  };
  useEffect(() => {
    if (!rates) {
      dispatch(createPostRates(postId));
    }
  });
  return (
    <>
      <RateInner>
        <RateButton onMouseUp={handleMouseUp}>
          <RateIcon rateType={rateType} userRate={userRate} />
        </RateButton>
        <RateCount>{rates && rates[rateType]}</RateCount>
      </RateInner>
    </>
  );
};

export default Rate;
