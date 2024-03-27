import { FC } from "react";
import { StyledInner } from "./Rates.styles";
import { IRates } from "../../../../../../types/types";
import Rate from "./Rate/Rate";

const getRandomNumber = () => Math.floor(Math.random() * 51);

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
            <Rate type="likes" count={getRandomNumber()} />
            <Rate type="dislikes" count={getRandomNumber()} />
          </>
        )}
      </StyledInner>
    </>
  );
};

export default Rates;
