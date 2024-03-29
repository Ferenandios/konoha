import { styled } from "styled-components";

export const StyledAnsoc = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 24px;
  height: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;
  background: none;
  border: none;
  margin-left: 14px;
`;

export const ShapeIcon = styled.img.attrs({
  src: "/src/assets/Search.svg",
  alt: "Search",
})`
  width: 18.01px;
  height: 18.01px;
`;

export default StyledButton;