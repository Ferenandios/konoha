import { styled } from "styled-components";
import { userRateType } from "../../../../../../../../types/types";

export const StyledSVG = styled.svg<{
  type: "likes" | "dislikes";
  userRate: userRateType;
}>`
  position: relative;
  fill: ${(props) => {
    switch (props.userRate) {
      case "liked":
        return "#219653";
      case "disliked":
        return "#EB5757";
      default:
        return "#959298";
    }
  }};
  top: ${(props) => (props.type === "dislikes" ? "2px" : "")};
  width: 26.67px;
  height: 24px;
  transform: ${(props) => (props.type === "dislikes" ? "scaleY(-1)" : "")};
`;
