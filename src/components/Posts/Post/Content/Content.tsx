import { FC } from "react";
import { type IContentProps } from "../../../../types/types";
import { StyledInner } from "./Content.styles";
import Title from "./Title/Title";

const Content: FC<IContentProps> = ({ title, rates }): JSX.Element => {
  return (
    <>
      <StyledInner>
        <Title title={title} rates={rates} />
      </StyledInner>
    </>
  );
};

export default Content;
