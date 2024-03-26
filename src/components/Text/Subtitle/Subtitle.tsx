import React, { FC } from "react";
import StyledSubtitle from "./Subtitle.styles";

const Subtitle: FC = (): JSX.Element => {
  return (
    <>
      <StyledSubtitle>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </StyledSubtitle>
    </>
  );
};

export default Subtitle;
