import styled from "styled-components";

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
  gap: 24px 0;
  &:first-child {
    margin-top: 0;
  }
`;
