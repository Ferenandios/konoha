import { styled } from "styled-components";

export const StyledSVG = styled.svg<{
  rateType: "liked" | "disliked";
  userRate: string;
}>`
  position: relative;
  fill: ${(props) => {
    if (props.rateType === "liked" && props.userRate === "liked")
      return "#219653";
    else if (props.rateType === "disliked" && props.userRate === "disliked")
      return "#EB5757";
    return "#959298";
  }};
  top: ${(props) => (props.rateType === "disliked" ? "2px" : "")};
  width: 26.67px;
  height: 24px;
  transform: ${(props) => (props.rateType === "disliked" ? "scaleY(-1)" : "")};
`;
