import styled from "styled-components";
import RateAsset from "/src/assets/Rate.svg?react";

export const RateInner = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-left: 24px;
`;

export const RateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
`;

export const RateImage = styled.img.attrs({
  src: RateAsset,
})<{ type: "likes" | "dislikes" }>`
  position: relative;
  top: ${(props) => (props.type === "dislikes" ? "2px" : "")};
  width: 26.67px;
  height: 24px;
  transform: ${(props) => (props.type === "dislikes" ? "scaleY(-1)" : "")};
`;

export const RateCount = styled.span`
  margin-left: 8px;
`;
