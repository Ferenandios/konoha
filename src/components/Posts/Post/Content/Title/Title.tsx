import { FC } from "react";
import { StyledInner, StyledTitle } from "./Title.styles";
import Rates from "./Rates/Rates";
import { type IRates } from "../../../../../types/types";

const Title: FC<{ title: string; rates: IRates }> = ({
  title,
  rates,
}): JSX.Element => {
  return (
    <>
      <StyledInner>
        <StyledTitle>{title}</StyledTitle>
        <Rates rates={rates} />
      </StyledInner>
    </>
  );
};

export default Title;
