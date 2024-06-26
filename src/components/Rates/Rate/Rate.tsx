import { FC, useEffect } from "react";
import {
  createPostRates,
  setPostRates,
  setPostUserRate,
} from "../../../features/posts.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RateButton, RateCount, RateInner } from "./Rate.styles";
import RateIcon from "./RateIcon/RateIcon";

const Rate: FC<{ rateType: "liked" | "disliked"; postId: number }> = ({
  postId,
  rateType,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { userRate } = useAppSelector((state) => state.posts.posts[postId]);
  const { rates } = useAppSelector((state) => state.posts.posts[postId]);
  const handleMouseUp = () => {
    if (rateType === userRate) {
      dispatch(setPostUserRate({ type: null, postId: postId }));
      dispatch(
        setPostRates({
          type: "remove",
          rateType: rateType,
          postId: postId,
        })
      );
    } else {
      dispatch(
        setPostRates({
          type: "add",
          rateType: rateType,
          postId: postId,
        })
      );
      userRate &&
        dispatch(
          setPostRates({
            type: "remove",
            rateType: userRate,
            postId: postId,
          })
        );
      dispatch(setPostUserRate({ type: rateType, postId: postId }));
    }
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
