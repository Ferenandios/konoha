import { FC } from "react";
import { RateButton, RateCount, RateImage, RateInner } from "./Rate.styles";

const Rate: FC<{ type: "likes" | "dislikes"; count: number }> = ({
  type,
  count,
}): JSX.Element => {
  return (
    <>
      <RateInner>
        <RateButton>
          <RateImage type={type} />
        </RateButton>
        <RateCount>{count}</RateCount>
      </RateInner>
    </>
  );
};

export default Rate;
