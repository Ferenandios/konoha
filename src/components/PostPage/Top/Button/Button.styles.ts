import styled from "styled-components";
import ArrowLeftAsset from "/src/assets/ArrowLeft.svg";

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 32px;
  gap: 9px;
`;

export const ButtonImg = styled.img.attrs({ src: ArrowLeftAsset })`
  width: 18px;
  height: 12px;
`;
