import styled from "styled-components";

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 32px;
  margin-bottom: 32px;
`;

export const StyledTitle = styled.h3<{ index: number }>`
  font-size: 28px;
  line-height: 32px;
  max-width: 959px;
  min-height: 32px;
  max-height: 96px;
  white-space: ${(props) => (!props.index ? "nowrap" : "normal")};
  text-overflow: ellipsis;
  overflow: hidden;
`;
