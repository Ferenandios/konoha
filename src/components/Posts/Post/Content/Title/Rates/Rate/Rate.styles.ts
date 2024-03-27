import styled from "styled-components";
import RateAsset from "/src/assets/Rate.svg?react";

export const RateInner = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const RateButton = styled.button<{ type: "likes" | "dislikes" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  transform: ${(props) =>
    props.type === "likes" ? "rotate(0deg)" : "rotate(180deg)"};
  ${(props) => (props.type === "dislikes" ? " scaleX(-1)" : "")};
`;

/* IN OTHER WAY TRY TO MIRROR THAT SHIT AS FUCK  */

export const RateImage = styled.img.attrs({
  src: RateAsset,
})`
  width: 26.67px;
  height: 24px;
`;

export const RateCount = styled.span`
  margin-left: 8px;
`;
