import styled from "styled-components";

export const StyledInner = styled.div<{ type: "bigPost" | "smallPost" }>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: ${(props) => (props.type === "bigPost" ? "1140px" : "558px")};
  border: 1px solid #f4f4f4;
  border-radius: 12px;
  box-shadow: 0px 0px 1px 0px #0000000a;
  box-shadow: 0px 2px 6px 0px #0000000a;
  box-shadow: 0px 10px 20px 0px #0000000a;
`;
