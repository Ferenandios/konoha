import { FC } from "react";
import { StyledInner } from "./Rates.styles";
import { type IRates } from "../../../../../../types/types";
import Rate from "./Rate/Rate";

const Rates: FC<{ rates: IRates }> = ({ rates }): JSX.Element => {
  return (
    <>
      <StyledInner>
        {rates ? (
          <>
            <Rate type="likes" count={rates.likes} />
            <Rate type="dislikes" count={rates.dislikes} />
          </>
        ) : (
          <>
            <Rate type="likes" count={51} />
            <Rate type="dislikes" count={51} />
          </>
        )}
      </StyledInner>
    </>
  );
};

export default Rates;
