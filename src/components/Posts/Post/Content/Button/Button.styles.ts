import styled from "styled-components";

export const ButtonInner = styled.div<{ index: number }>`
  display: flex;
  justify-content: ${(props) => (!props.index ? "end" : "space-between")};
  width: 100%;
  height: 45px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  color: #0a0a0a;
  line-height: 18.75px;
  min-width: 150px;
  max-width: 300px;
  height: 45px;
  background: none;
  border: 2px solid #0a0a0a;
  border-radius: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
`;
