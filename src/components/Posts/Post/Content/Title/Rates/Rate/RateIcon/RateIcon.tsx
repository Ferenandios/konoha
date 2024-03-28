import { FC } from "react";
import { StyledSVG } from "./RateIcon.styles";
import { type userRateType } from "../../../../../../../../types/types";

const RateIcon: FC<{
  rateType: "liked" | "disliked";
  userRate: userRateType | undefined;
}> = ({ rateType, userRate }): JSX.Element => {
  return (
    <StyledSVG
      width="28"
      height="25"
      viewBox="0 0 28 25"
      rateType={rateType}
      userRate={`${userRate}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666687 24.1667H3.33335C4.06669 24.1667 4.66669 23.5667 4.66669 22.8334V10.8334C4.66669 10.1 4.06669 9.50002 3.33335 9.50002H0.666687V24.1667ZM27.1067 14.6734C27.2534 14.34 27.3334 13.98 27.3334 13.6067V12.1667C27.3334 10.7 26.1334 9.50002 24.6667 9.50002H17.3334L18.56 3.30002C18.6267 3.00669 18.5867 2.68669 18.4534 2.42002C18.1467 1.82002 17.76 1.27335 17.28 0.793354L16.6667 0.166687L8.12002 8.71335C7.61335 9.22002 7.33335 9.90002 7.33335 10.6067V21.06C7.33335 22.7667 8.73335 24.1667 10.4534 24.1667H21.2667C22.2 24.1667 23.08 23.6734 23.56 22.8734L27.1067 14.6734Z"
        fill="default"
      />
    </StyledSVG>
  );
};

export default RateIcon;
